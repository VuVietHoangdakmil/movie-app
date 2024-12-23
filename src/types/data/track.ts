import { ItemArtistis } from "./artists";
import { Album } from "./alum";
export interface Track {
  album: Album;
  artists: ItemArtistis[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: null | string;
  track_number: number;
  type: string;
  uri: string;
}
