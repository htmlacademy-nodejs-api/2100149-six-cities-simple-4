import { City } from './city.type';
import { Features } from './features.type';
import { OfferType } from './offer-type.type';
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
  type: OfferType;
  roomsCount: number;
  guestsCount: number;
  price: number;
  features: Features[];
  user: User;
  commentsCount: number;
  location: {
    lat: number;
    long: number;
  };
};
