export default function ExamplePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold">Trang ví dụ</h1>
      <p className="mt-2 text-muted-foreground">
        Đây là ví dụ về một route con nằm trong thư mục{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
          src/app/(routes)/example
        </code>
        . Dấu ngoặc đơn quanh tên thư mục là &quot;route group&quot; của
        Next.js — không xuất hiện trong URL, chỉ dùng để tổ chức code.
      </p>
    </section>
  );
}
