import { fetchWithAuth } from "@/app/actions";
import { Artistis } from "@/types/data/artists";
export default async function FillterPage({
  searchParams,
}: {
  searchParams: Promise<{ search: string; page: string }>;
}) {
  const { page, search } = await searchParams;
  const pagecustome = Number(page ?? 0) - 1;

  const data = await fetchWithAuth<{ artists?: Artistis }>(
    `${process.env.NEXT_PUBLIC_SEARCH}?q=${search}&type=artist&offset=${
      (pagecustome < 0 ? 0 : pagecustome) * 20
    }`
  );
  console.log("data", data);
  if (data?.error?.message === "No search query") {
    return <div>Vui lòng chọn thông tin muốn tìm</div>;
  }

  return <div>fillter</div>;
}
