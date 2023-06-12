import typegoose, {defaultClasses, getModelForClass, Ref} from '@typegoose/typegoose';
import { OfferType } from '../../types/offer-type.type.js';
import { UserEntity } from '../user/user.entity.js';
import { City } from '../../types/city.type.js';
import { Features } from '../../types/features.type.js';
import { Location } from '../../types/location.type.js';

const { prop, modelOptions } = typegoose;

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({trim: true, required: true})
  public title!: string;

  @prop({trim: true, required: true})
  public description!: string;

  @prop({required: true})
  public postDate!: Date;

  @prop({
    city: () => String,
    enum: City,
    required: true
  })
  public city!: City;

  @prop({trim: true, required: true})
  public preview!: string;

  @prop({required: true})
  public photos!: string[];

  @prop({required: true})
  public isPremium!: boolean;

  @prop({required: true})
  public rating!: number;

  @prop({
    type: () => String,
    enum: OfferType,
    required: true
  })
  public type!: OfferType;

  @prop({required: true})
  public roomsCount!: number;

  @prop({required: true})
  public guestsCount!: number;

  @prop({required: true})
  public price!: number;

  @prop({
    type: () => String,
    required: true,
    enum: Features
  })
  public features!: Features[];

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId!: Ref<UserEntity>;

  @prop({default: 0})
  public commentCount!: number;

  @prop()
  public location!: Location;
}

export const OfferModel = getModelForClass(OfferEntity);
