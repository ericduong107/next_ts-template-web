import Button from "@/components/ui/Button";
import { APP_NAME } from "@/constants";

export default function HomePage() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Chào mừng đến với {APP_NAME}
      </h1>
      <p className="max-w-xl text-muted-foreground">
        Đây là trang chủ mẫu. Bắt đầu chỉnh sửa{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
          src/app/page.tsx
        </code>{" "}
        để xây dựng sản phẩm của bạn.
      </p>
      <div className="flex gap-3">
        <Button>Bắt đầu</Button>
        <Button variant="outline">Tài liệu</Button>
      </div>
    </section>
  );
}
