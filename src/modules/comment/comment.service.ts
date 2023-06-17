import { inject, injectable } from 'inversify';
import { DocumentType, types } from '@typegoose/typegoose';
import { CommentServiceInterface } from './comment-service.interface.js';
import CreateCommentDto from './dto/create-comment.dto.js';
import { CommentEntity } from './comment.entity.js';
import { AppComponent } from '../../types/app-component.enum.js';
import { SortType } from '../../types/sort-type.enum.js';
import { DEFAULT_COMMENT_COUNT } from './comment.constant.js';

@injectable()
export default class CommentService implements CommentServiceInterface {
  constructor(
    @inject(AppComponent.CommentModel) private readonly commentModel: types.ModelType<CommentEntity>
  ) { }

  public async create(dto: CreateCommentDto): Promise<DocumentType<CommentEntity>> {
    const comment = await this.commentModel.create(dto);
    return comment.populate('userId');
  }

  public async findByOfferId(offerId: string): Promise<DocumentType<CommentEntity>[]> {
    return this.commentModel
      .find({ offerId })
      .sort({createdAt: SortType.Down})
      .limit(DEFAULT_COMMENT_COUNT)
      .populate('userId');
  }
}
