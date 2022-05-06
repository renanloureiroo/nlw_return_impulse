import { Feedback } from "@prisma/client";
import { prisma } from "../../prisma";
import {
  ICreateFeedbackDTO,
  IFeedbackRepository,
} from "../IFeedbackRepository";

class FeedbackRepository implements IFeedbackRepository {
  async create({
    comment,
    type,
    screenshot,
  }: ICreateFeedbackDTO): Promise<void> {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}

export { FeedbackRepository };
