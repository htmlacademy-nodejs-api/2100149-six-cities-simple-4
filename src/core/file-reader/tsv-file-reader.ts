import { readFileSync } from 'node:fs';
import { FileReaderInterface } from './file-reader.interface.js';
import { Offer } from '../../types/offer.type.js';
import { City } from '../../types/city.type.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([
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
      ]) => {
        const [name, email, avatar, password, userIsPro] = user.split(';');

        return {
          title,
          description,
          postDate: new Date(postDate),
          city: city as City,
          preview,
          photos: photos.split(';'),
          isPremium: isPremium === 'true',
          rating: Number.parseFloat(rating),
          type,
          roomsCount: Number.parseInt(roomsCount, 10),
          guestsCount: Number.parseInt(guestsCount, 10),
          price: Number.parseInt(price, 10),
          features: features.split(';'),
          user: {
            name,
            email,
            avatar,
            password,
            isPro: userIsPro === 'true',
          },
          commentsCount: Number.parseInt(commentsCount, 10),
          location: {
            lat: Number.parseFloat(location.split(';')[0]),
            long: Number.parseFloat(location.split(';')[1])
          }
        };
      });
  }
}
