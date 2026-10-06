import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fdf6e9",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 120 }}>🌻</div>
        <div
          style={{
            fontSize: 56,
            color: "#4a4136",
            marginTop: 24,
            fontWeight: 600,
          }}
        >
          Tengo algo para ti
        </div>
        <div style={{ fontSize: 28, color: "#8a7f6c", marginTop: 16 }}>
          A tiny surprise.
        </div>
      </div>
    ),
    { ...size }
  );
}
