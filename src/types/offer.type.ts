import { City } from './city.type';
import { User } from './user.type';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: City;
  preview: string;
  photos: string[];
  isPremium: boolean;
  rating: number;
  type: string;
  roomsCount: number;
  guestsCount: number;
  price: number;
  features: string[];
  user: User;
  commentsCount: number;
  location: {
    lat: number;
    long: number;
  };
};
