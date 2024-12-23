import { fetchWithAuth } from "@/app/actions";
import { ItemArtistis } from "@/types/data/artists";
import { Track } from "@/types/data/track";
import { idArtists } from "@/utils/constans";
import TopTrack from "@/components/pages/top-track";
export function generateStaticParams() {
  return idArtists.map((id) => ({ id }));
}
export default async function PageArtistisById({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const urlTracks =
    process.env.NEXT_PUBLIC_ARTISTS_TOP_TRACKS?.replace(":id", id) ?? "";
  const urlArtist = `${process.env.NEXT_PUBLIC_ARTISTS}/${id}`;
  const data = await Promise.all([
    fetchWithAuth<{ tracks?: Track[] }>(urlTracks, {
      cache: "force-cache",
    }),
    fetchWithAuth<ItemArtistis>(urlArtist, {
      cache: "force-cache",
    }),
  ]);
  const [tracks, artist] = data;
  console.log("data", tracks.tracks);
  console.log("track22s", artist);
  return <TopTrack artistis={artist ?? {}} tracks={tracks?.tracks ?? []} />;
}
