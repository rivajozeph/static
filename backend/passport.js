
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

const DEMO_USER_ID = "1";

function configurePassport() {
  const username = (process.env.DEMO_USERNAME || "demo").toLowerCase();
  const passwordHash = process.env.DEMO_PASSWORD_HASH;

  if (!passwordHash) {
    throw new Error("DEMO_PASSWORD_HASH is missing from backend/.env");
  }

  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      async (enteredUsername, enteredPassword, done) => {
        try {
          const normalizedUsername = enteredUsername.trim().toLowerCase();

          if (normalizedUsername !== username) {
            return done(null, false);
          }

          const passwordMatches = await bcrypt.compare(
            enteredPassword,
            passwordHash
          );

          if (!passwordMatches) {
            return done(null, false);
          }

          return done(null, {
            id: DEMO_USER_ID,
            username,
          });
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    if (id === DEMO_USER_ID) {
      return done(null, {
        id: DEMO_USER_ID,
        username,
      });
    }

    return done(null, false);
  });
}

module.exports = { configurePassport };
