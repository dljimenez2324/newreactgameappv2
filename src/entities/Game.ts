import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publishers } from "./Publishers";



// help us shape our data in the form of our interface for Games

export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publishers[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
}
