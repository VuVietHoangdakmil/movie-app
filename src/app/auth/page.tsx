"use client";
import { usePathname } from 'next/navigation'
import { useRouter } from "next/navigation";

export default function Login() {
  console.log("process.env.NODE_ENV",process.env.NEXT_PUBLIC_BASE_URL)
  const router = useRouter();
  const path = usePathname();
  console.log("path",path)
  const fecthToken = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/setCookiesToken`);
      router.push("/");
    } catch (e) {
      console.log("có lỗi");
    }
  };
  return (
    <div>
      <button onClick={fecthToken}>Vào trang chủ</button>
    </div>
  );
}
