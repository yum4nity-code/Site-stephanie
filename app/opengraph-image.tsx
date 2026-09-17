import { ImageResponse } from "next/og";

export const alt = "Stéphanie Recorda — Expertise RH & Paie externalisée pour TPE et PME";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(120deg,#FFFFFF 0%,#EFF5FA 100%)",
          padding: "72px 82px",
          color: "#0D274A",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, fontWeight: 700 }}>Stéphanie Recorda</div>
          <div
            style={{
              width: 92,
              height: 6,
              marginTop: 18,
              background: "#1696D2",
              borderRadius: 99,
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 930 }}>
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 68,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: -1.5,
            }}
          >
            Expertise RH &amp; Paie externalisée pour TPE et PME
          </div>
          <div style={{ marginTop: 26, fontSize: 27, color: "#394352" }}>
            Strasbourg &amp; Bas-Rhin · Sur site / à distance
          </div>
        </div>

        <div style={{ fontSize: 22, color: "#122C4C" }}>
          15 ans d’expérience RH · Spécialiste paie Silae
        </div>
      </div>
    ),
    size,
  );
}
