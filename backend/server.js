
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.join(__dirname, ".env") });

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const { configurePassport } = require("./passport");

const app = express();
const PORT = process.env.PORT || 4000;
const isProduction = process.env.NODE_ENV === "production";

if (!process.env.SESSION_SECRET) {
  throw new Error("SESSION_SECRET is missing from backend/.env");
}

if (isProduction) {
  app.set("trust proxy", 1);
}

app.use(helmet());

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json({ limit: "10kb" }));

app.use(
  session({
    name: "sakshama.sid",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: isProduction,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000,
    },
  })
);

configurePassport();

app.use(passport.initialize());
app.use(passport.session());

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    error: "Too many login attempts. Please try again later.",
  },
});

function requireLogin(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.status(401).json({
    error: "Please log in to continue.",
  });
}

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/login", loginLimiter, (req, res, next) => {
  passport.authenticate("local", (error, user) => {
    if (error) {
      return next(error);
    }

    if (!user) {
      return res.status(401).json({
        error: "Invalid username or password.",
      });
    }

    req.logIn(user, (loginError) => {
      if (loginError) {
        return next(loginError);
      }

      return res.json({
        message: "Login successful.",
        user: { username: user.username },
      });
    });
  })(req, res, next);
});

app.get("/api/me", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({
      authenticated: false,
    });
  }

  return res.json({
    authenticated: true,
    user: { username: req.user.username },
  });
});

app.get("/api/dashboard", requireLogin, (req, res) => {
  res.json({
    message: "Welcome to the protected Sakshama dashboard.",
    user: { username: req.user.username },
  });
});

app.post("/api/logout", (req, res, next) => {
  req.logout((logoutError) => {
    if (logoutError) {
      return next(logoutError);
    }

    if (!req.session) {
      res.clearCookie("sakshama.sid");
      return res.json({ message: "Logged out successfully." });
    }

    req.session.destroy((sessionError) => {
      if (sessionError) {
        return next(sessionError);
      }

      res.clearCookie("sakshama.sid", {
        httpOnly: true,
        sameSite: "lax",
        secure: isProduction,
      });

      return res.json({ message: "Logged out successfully." });
    });
  });
});

app.use((error, req, res, next) => {
  console.error("Backend error:", error.message);

  if (res.headersSent) {
    return next(error);
  }

  return res.status(500).json({
    error: "An unexpected server error occurred.",
  });
});

app.listen(PORT, () => {
  console.log(`Passport.js backend running at http://localhost:${PORT}`);
});
