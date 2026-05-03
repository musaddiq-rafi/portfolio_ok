import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Abdullah Al Musaddiq Rafi Portfolio";
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
          background: "linear-gradient(135deg, #000000 0%, #1a1a2e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <span
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "white",
              letterSpacing: "-2px",
            }}
          >
            ABDULLAH AL
          </span>
          <span
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "#3b82f6",
              letterSpacing: "-2px",
            }}
          >
            MUSADDIQ RAFI
          </span>
          <span
            style={{
              fontSize: 30,
              fontWeight: 400,
              color: "#9ca3af",
              marginTop: 20,
            }}
          >
            Full Stack Developer
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}