"use client";
import { ItemArtistis } from "@/types/data/artists";
import { Track } from "@/types/data/track";
import { formatNumber, formatMilliseconds } from "@/utils/formatNumber";
import Container from "@/components/reponsive_container/container_main";
import { useMemo } from "react";
import Image from "next/image";
import { Row, Col } from "antd";
type Props = {
  artistis: ItemArtistis;
  tracks: Track[];
};
const TopTrack: React.FC<Props> = ({ artistis, tracks }) => {
  const ListMemo = useMemo(() => {
    return tracks.map((track, index) => (
      <Row
        key={track.id}
        className=" p-2 rounded-xl flex items-center font-medium  hover:bg-white hover:cursor-pointer "
      >
        <Col span={1}>{index + 1}</Col>
        <Col span={20}>
          <div className="flex items-center">
            <Image
              className="rounded-lg mr-4"
              loading="lazy"
              alt=""
              width={50}
              height={50}
              src={track?.album?.images[0].url}
            />
            <div>{track.name}</div>
          </div>
        </Col>
        <Col span={2}>{formatMilliseconds(track.duration_ms)} </Col>
      </Row>
    ));
  }, []);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("${artistis.images?.[0].url}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "280px",
        }}
      >
        <Container>
          <div className="font-medium text-white  text-8xl">
            {artistis?.name ?? ""}
          </div>
          <div className="text-2xl  text-white mt-5">
            {formatNumber(artistis?.followers?.total ?? 0)}{" "}
          </div>
        </Container>
      </div>
      <Container>
        <h1 className="my-2 text-2xl font-medium">Popular</h1>
        {ListMemo}
      </Container>
    </div>
  );
};
export default TopTrack;
