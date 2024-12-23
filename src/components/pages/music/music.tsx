"use client";
import { ItemArtistis } from "@/types/data/artists";
import { List } from "antd";
import ItemArtist from "@/components/Item-artist";
import { path } from "@/routes/index";
const Music: React.FC<{ artistis: ItemArtistis[] }> = ({ artistis }) => {
  console.log("Artist", artistis);
  return (
    <List
      style={{ padding: "10px" }}
      grid={{ column: 5 }}
      dataSource={artistis}
      renderItem={(item) => (
        <List.Item>
          <ItemArtist
            name={item.name}
            image={item?.images?.[0]}
            type={item.type}
            pathRouter={`${path.artistis_top_tracks}/${item.id}`}
          />
        </List.Item>
      )}
    />
  );
};
export default Music;
