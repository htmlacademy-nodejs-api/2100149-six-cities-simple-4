import dayjs from 'dayjs';
import { OfferGeneratorInterface } from './offer-generator.interface.js';
import { MockData } from '../../types/mock-data.type.js';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../core/helpers/index.js';
import { OfferType } from '../../types/offer-type.type.js';
import { City } from '../../types/city.type.js';
import { Features } from '../../types/features.type.js';

const enum Rate {
  MIN = 1,
  MAX = 5
}

const enum Price {
  MIN = 100,
  MAX = 100000
}

const enum WeekDay {
  FIRST = 1,
  LAST = 7
}

const enum RoomsCount {
  MIN = 1,
  MAX = 8
}

const enum GuestsCount {
  MIN = 1,
  MAX = 10
}

const enum CommentsCount {
  MIN = 0,
  MAX = 50
}

const PHOTOS_COUNT = 6;

export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const postDate = dayjs().subtract(generateRandomValue(WeekDay.FIRST, WeekDay.LAST), 'day').toISOString();
    const city = getRandomItem<City>(Object.values(City));
    const preview = getRandomItem<string>(this.mockData.previewImages);
    const photos = Array(PHOTOS_COUNT).fill(getRandomItem<string>(this.mockData.photos)).join(';');
    const isPremium = getRandomItem<string>(['true', 'false']);
    const rating = generateRandomValue(Rate.MIN, Rate.MAX, 1).toString();
    const type = getRandomItem<OfferType>(Object.values(OfferType));
    const roomsCount = generateRandomValue(RoomsCount.MIN, RoomsCount.MAX).toString();
    const guestsCount = generateRandomValue(GuestsCount.MIN, GuestsCount.MAX).toString();
    const price = generateRandomValue(Price.MIN, Price.MAX).toString();
    const features = getRandomItems<Features>(Object.values(Features)).join(';');
    const user = [
      getRandomItem<string>(this.mockData.users),
      getRandomItem<string>(this.mockData.emails),
      getRandomItem<string>(this.mockData.avatars),
      getRandomItem<string>(this.mockData.passwords),
      getRandomItem<string>(['true', 'false'])
    ].join(';');
    const commentsCount = generateRandomValue(CommentsCount.MIN, CommentsCount.MAX).toString();
    const location = getRandomItem<string>(this.mockData.locations);

    return [
      title, description, postDate,
      city, preview, photos, isPremium,
      rating, type, roomsCount, guestsCount,
      price, features, user, commentsCount, location
    ].join('\t');
  }
}
