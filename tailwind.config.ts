import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#f7f7f2",
          soft: "#eef3ec",
          mist: "#f1f5f2",
        },
        ink: {
          DEFAULT: "#24323a",
          muted: "#5f6f73",
          light: "#7d8b8b",
        },
        calm: {
          blue: "#5f88a8",
          sky: "#dbe9f1",
          green: "#7f9b84",
          leaf: "#e3ebdf",
          sand: "#f5efe3",
        },
        card: {
          DEFAULT: "#ffffff",
          warm: "#fbfcf8",
        },
      },
      boxShadow: {
        soft: "0 12px 30px rgba(73, 97, 115, 0.08)",
        hover: "0 18px 40px rgba(73, 97, 115, 0.12)",
      },
      borderRadius: {
        gentle: "1.5rem",
      },
      fontFamily: {
        sans: ["Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
