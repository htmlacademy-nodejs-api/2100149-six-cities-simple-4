import { City } from '../../types/city.type.js';
import { Features } from '../../types/features.type.js';
import { OfferType } from '../../types/offer-type.type.js';
import { Offer } from '../../types/offer.type.js';

export function createOffer(offerData: string): Offer {
  const [
    title,
    description,
    postDate,
    city,
    preview,
    photos,
    isPremium,
    rating,
    type,
    roomsCount,
    guestsCount,
    price,
    features,
    user,
    commentsCount,
    location
  ] = offerData.replace('\n', '').split('\t');

  const [name, email, avatar, password, userIsPro] = user.split(';');
  const [lat, long] = location.split(';');

  return {
    title,
    description,
    postDate: new Date(postDate),
    city: city as City,
    preview,
    photos: photos.split(';'),
    isPremium: isPremium === 'true',
    rating: Number.parseFloat(rating),
    type: type as OfferType,
    roomsCount: Number.parseInt(roomsCount, 10),
    guestsCount: Number.parseInt(guestsCount, 10),
    price: Number.parseInt(price, 10),
    features: features.split(';') as Features[],
    user: {
      name,
      email,
      avatar: avatar ? avatar : 'default',
      password,
      isPro: userIsPro === 'true',
    },
    commentsCount: Number.parseInt(commentsCount, 10),
    location: {
      lat: Number.parseFloat(lat),
      long: Number.parseFloat(long)
    }
  };
}
