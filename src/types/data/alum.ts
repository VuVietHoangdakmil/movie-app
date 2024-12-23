import { ItemArtistis } from "./artists";
import { Image } from "../images";
export interface Album {
  album_type: string;
  artists: ItemArtistis[];
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Image[];
  is_playable: true;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: 24;
  type: string;
  uri: string;
}
