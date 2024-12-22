"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Container from "@/components/reponsive_container";
import { useCallback, useState } from "react";
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
    <header className="bg-primary_blue w-full h-[100px] sticky top-0">
      <Container>
        <div className="flex items-center h-full justify-between">
          <div className="text-3xl text-white">LOGO_MUSIC</div>
          <div className=" border-none relative  h-[50px]">
            <input
              className="bg-[#d0d7db] border-none rounded-[40px] outline-none pl-4 w-[400px] h-full"
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
export default Header;
