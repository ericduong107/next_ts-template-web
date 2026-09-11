export const APP_NAME = "Next Template";

export const ROUTES = {
  HOME: "/",
  EXAMPLE: "/example",
} as const;

export const SITE_CONFIG = {
  name: APP_NAME,
  description: "Boilerplate dự án Next.js sẵn sàng dùng ngay",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
} as const;
