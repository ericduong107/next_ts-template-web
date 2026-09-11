import { type ClassValue, clsx } from "clsx";

/**
 * Gộp class names, bỏ qua giá trị falsy.
 * Dùng: cn("p-4", isActive && "bg-primary", className)
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format số thành chuỗi tiền tệ VNĐ.
 */
export function formatCurrency(amount: number, currency = "VND") {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency,
  }).format(amount);
}

/**
 * Format ngày theo định dạng Việt Nam.
 */
export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(date));
}

/**
 * Sleep tiện dụng cho việc test / giả lập độ trễ.
 */
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
