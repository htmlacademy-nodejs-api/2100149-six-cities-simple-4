import { City } from '../../../types/city.type';
import { Features } from '../../../types/features.type';
import { Location } from '../../../types/location.type';
import { OfferType } from '../../../types/offer-type.type';

export default class UpdateOfferDto {
  public title?: string;
  public description?: string;
  public postDate?: Date;
  public city?: City;
  public preview?: string;
  public photos?: string[];
  public isPremium?: boolean;
  public rating?: number;
  public type?: OfferType;
  public roomsCount?: number;
  public guestsCount?: number;
  public price?: number;
  public features?: Features[];
  public location?: Location;
}
