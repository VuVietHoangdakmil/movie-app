"use client";
import { Image as typeImage } from "@/types/images";
import { useRouter } from "next/navigation";

const ItemArtits: React.FC<{
  image: typeImage;
  name?: string;
  type?: string;
  pathRouter?: string;
}> = ({ image, name, type, pathRouter }) => {
  const { url } = image;
  const router = useRouter();
  const handelerClick = () => {
    router.push(pathRouter ?? "", { scroll: true });
  };
  return (
    <div
      onClick={handelerClick}
      className="h-full hover:bg-white hover:cursor-pointer rounded-xl px-2 py-4"
    >
      <img
        src={url}
        alt=""
        height={100}
        style={{ width: 220, height: 220 }}
        loading="lazy"
        className="rounded-[50%] mx-auto "
      />
      <div className="text-black text-2xl font-medium">{name}</div>
      <div className="text-xl  text-gray-400 ">{type}</div>
    </div>
  );
};
export default ItemArtits;
