import { ImageResponse } from "next/og";

export const alt = "Design The Thought — Ideas. Innovation. Growth.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0B0F19",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #6366F1, #0EA5E9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: "26px",
              fontWeight: 900,
            }}
          >
            DTT
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: "32px",
              fontWeight: 800,
              letterSpacing: "-0.5px",
            }}
          >
            Design The Thought
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "960px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                padding: "8px 18px",
                borderRadius: "9999px",
                background: "rgba(99, 102, 241, 0.15)",
                border: "1px solid rgba(99, 102, 241, 0.35)",
                color: "#818cf8",
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              Ideas. Innovation. Growth.
            </div>
          </div>
          <div
            style={{
              color: "#F9FAFB",
              fontSize: "56px",
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: "-1.5px",
            }}
          >
            AI, Future Technology, Startups &amp; Modern Design
          </div>
          <div
            style={{
              color: "#94a3b8",
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: 1.4,
            }}
          >
            Practitioner-tested analysis and deep-dive technical workflows for founders, builders, and creators.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #1e293b",
            paddingTop: "32px",
            color: "#64748b",
            fontSize: "20px",
            fontWeight: 500,
          }}
        >
          <div>designthethought.com</div>
          <div style={{ display: "flex", gap: "24px" }}>
            <span>AI &amp; Tech</span>
            <span>•</span>
            <span>Startups &amp; Biz</span>
            <span>•</span>
            <span>Design &amp; Growth</span>
            <span>•</span>
            <span>AI Hub</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

