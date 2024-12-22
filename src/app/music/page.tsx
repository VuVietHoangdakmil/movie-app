import { fetchWithAuth } from "@/app/actions";

export default async function Music() {
  const data = await fetchWithAuth(
    `${process.env.NEXT_PUBLIC_ARTISTS}?ids=5HZtdKfC4xU0wvhEyYDWiY,57g2v7gJZepcwsuwssIfZs,3diftVOq7aEIebXKkC34oR,5dfZ5uSmzR7VQK0udbAVpf`
  );

  console.log(data);
  return <div></div>;
}
