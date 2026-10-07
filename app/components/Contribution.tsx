import { Copy, QrCode, ReceiptText } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

export default function Contribution() {
  return (
    <section
      id="direct-support"
      className="border-b border-[#e3e2dc] bg-[#f3f2ee] px-5 py-16 sm:px-8 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1400px]">
        <span className="inline-flex rounded-full bg-[#ffe2cf] px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] text-[#9d4e0b]">
          ◉ PHASE 1 COMMUNITY SUPPORT — TRANSPARENT DIRECT PAYMENT
        </span>

        <h2 className="mt-4 font-serif text-4xl leading-[0.98] tracking-[-0.025em] text-[#063d32] sm:text-5xl">
          Direct, Zero-Intermediary
          <br />
          Contribution
        </h2>

        <p className="mt-5 max-w-[800px] text-[15px] leading-6 text-[#666b67]">
          During Phase 1, to guarantee 100% accountability with zero payment
          gateway deduction, Sakshama Kottayam directly accepts contributions
          via official registered UPI and NEFT/RTGS bank transfers.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          {/* UPI */}
          <div className="rounded-[20px] border border-[#deddd7] bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#e5e3dd] pb-4">
              <div>
                <p className="text-[10px] font-bold tracking-[0.15em] text-[#9d4e0b]">
                  DIRECT UPI DONATION
                </p>

                <p className="mt-1 text-[13px] text-[#6b706d]">
                  Google Pay, PhonePe, Paytm, BHIM
                </p>
              </div>

              <QrCode size={19} className="text-[#a65308]" />
            </div>

            <div className="flex justify-center py-10">
              <div className="rounded-xl border border-[#eceae4] bg-[#f7f7f3] p-5">
                <QRCodeSVG
                  value="upi://pay?pa=sakshamakottayam@sbi"
                  size={155}
                  bgColor="#f7f7f3"
                  fgColor="#063d32"
                  includeMargin={true}
                />

                <p className="mt-2 text-center text-[9px] text-[#5f6662]">
                  Scan with any UPI app
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-[#f1f1ed] p-3">
              <div>
                <p className="text-[9px] font-bold tracking-[0.12em] text-[#6b706d]">
                  REGISTERED UPI ID
                </p>

                <p className="mt-1 text-sm font-semibold text-[#183d35]">
                  sakshamakottayam@sbi
                </p>
              </div>

              <button className="flex items-center gap-1 rounded-lg bg-[#063d32] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#075344]">
                <Copy size={12} />
                Copy
              </button>
            </div>
          </div>

          {/* BANK */}
          <div className="rounded-[20px] border border-[#deddd7] bg-white p-6 shadow-sm">
            <div className="border-b border-[#e5e3dd] pb-4">
              <p className="text-[10px] font-bold tracking-[0.15em] text-[#9d4e0b]">
                BANK TRANSFER (NEFT / RTGS / IMPS)
              </p>

              <h3 className="mt-1 font-serif text-2xl text-[#123b32]">
                Official Bank Account Information
              </h3>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <InfoBox label="ACCOUNT NAME" value="Sakshama Kottayam District" />
              <InfoBox label="BANK NAME" value="State Bank of India (SBI)" />
              <InfoBox label="ACCOUNT NUMBER" value="6739 1042 8841" copy />
              <InfoBox label="IFSC CODE" value="SBIN0000862" copy />

              <div className="rounded-xl bg-[#f1f1ed] p-4 sm:col-span-2">
                <p className="text-[9px] font-bold tracking-[0.12em] text-[#707570]">
                  BRANCH
                </p>

                <p className="mt-1 text-sm text-[#203d36]">
                  Kottayam Main Branch, Collectorate P.O., Kottayam
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-[#d9ddd8] bg-[#f0f2ee] p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#27443c]">
                <ReceiptText size={16} />
                Tax Exemption & Acknowledgement Receipt
              </div>

              <p className="mt-2 text-[12px] leading-5 text-[#69706c]">
                All donations are acknowledged with an official stamped
                receipt. 80G income tax exemption certification available upon
                submitting transfer reference and PAN details to
                sakshamakottayam@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBox({
  label,
  value,
  copy = false,
}: {
  label: string;
  value: string;
  copy?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-[#f1f1ed] p-4">
      <div>
        <p className="text-[9px] font-bold tracking-[0.12em] text-[#707570]">
          {label}
        </p>

        <p className="mt-1 text-sm font-semibold text-[#203d36]">{value}</p>
      </div>

      {copy && <Copy size={13} className="text-[#707570]" />}
    </div>
  );
}