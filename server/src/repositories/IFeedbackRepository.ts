import { Feedback } from "@prisma/client";

interface ICreateFeedbackDTO {
  type: string;
  comment: string;
  screenshot?: string;
}

interface IFeedbackRepository {
  create(data: ICreateFeedbackDTO): Promise<void>;
}

export { IFeedbackRepository, ICreateFeedbackDTO };
