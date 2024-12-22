"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
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
