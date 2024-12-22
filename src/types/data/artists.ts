import { Image } from "../images";
export interface Artistis {
  href: string;
  limit: number;
  next: string;
  offset: 0;
  previous: null | string;
  total: number;
  items: [
    {
      external_urls: {
        spotify: string;
      };
      followers: {
        href: string | null;
        total: number;
      };
      genres: unknown[];
      href: string;
      id: string;
      images: Image[];
      name: string;
      popularity: number;
      type: string;
      uri: string;
    }
  ];
}
