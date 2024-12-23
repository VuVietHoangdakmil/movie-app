import { fetchWithAuth } from "@/app/actions";
import { idArtists } from "@/utils/constans";
import { ItemArtistis } from "@/types/data/artists";
import MusicList from "@/components/pages/music";
import Container from "@/components/reponsive_container/container_content_top";
export default async function Music() {
  const data = await fetchWithAuth<{ artists: ItemArtistis[] }>(
    `${process.env.NEXT_PUBLIC_ARTISTS}?ids=${idArtists.toString()}`,
    { cache: "force-cache" }
  );

  return (
    <Container>
      <MusicList artistis={data?.artists ?? []} />
    </Container>
  );
}
