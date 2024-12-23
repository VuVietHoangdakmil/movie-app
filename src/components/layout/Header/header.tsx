"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Container from "@/components/reponsive_container";
import { useCallback, useState, memo } from "react";
import { path } from "@/routes";
const Header: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  const [stateSearch, setSearch] = useState<string>(search ?? "");
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <header className=" bg-white   h-[70px]  sticky top-0 z-[9999]">
      <Container>
        <div className="flex items-center h-full justify-between">
          <div className="text-3xl text-black">LOGO_MUSIC</div>
          <div className=" border-none relative  h-[40px]">
            <input
              className="bg-slate-100 border-none rounded-[40px] outline-none pl-4 w-[400px] h-full"
              placeholder="Tìm kiếm"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={stateSearch}
            />
            <button
              onClick={() => {
                router.push(
                  `${path.fillter}?${createQueryString("search", stateSearch)}`
                );
              }}
              className="bg-primary_pink top-0  border-none h-full absolute right-0 rounded-[40px] px-12 text-white"
            >
              Search
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};
export default memo(Header);
