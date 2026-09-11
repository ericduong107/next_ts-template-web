import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-md flex-col items-center gap-4 px-6 py-32 text-center">
      <h1 className="text-3xl font-bold">404 - Không tìm thấy trang</h1>
      <p className="text-muted-foreground">
        Trang bạn tìm không tồn tại hoặc đã bị di chuyển.
      </p>
      <Link href="/" className="text-primary underline underline-offset-4">
        Về trang chủ
      </Link>
    </section>
  );
}
