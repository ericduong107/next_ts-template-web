const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = "ApiError";
  }
}

interface FetcherOptions extends RequestInit {
  json?: unknown;
}

/**
 * Wrapper gọn cho fetch: tự động set JSON header, base URL, và ném lỗi
 * có cấu trúc khi response không ok.
 *
 * Dùng: const data = await fetcher<User[]>("/users")
 */
export async function fetcher<T>(
  path: string,
  { json, headers, ...options }: FetcherOptions = {},
): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: json !== undefined ? JSON.stringify(json) : options.body,
  });

  if (!res.ok) {
    const message = await res.text().catch(() => res.statusText);
    throw new ApiError(message || "Request thất bại", res.status);
  }

  // Trường hợp response không có body (204, v.v.)
  const text = await res.text();
  return text ? (JSON.parse(text) as T) : (undefined as T);
}
