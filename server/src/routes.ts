import { Router } from "express";

import { NodeMailerMailAdapter } from "./adapters/nodemailer/nodemailerMailAdapter";

import { FeedbackRepository } from "./repositories/prisma/FeedbackRepository";
import { SubmitFeedbackController } from "./useCases/submitFeedbackController";
import { SubmitFeedbackUseCase } from "./useCases/submitFeedbackUseCase";

const feedbackRepository = new FeedbackRepository();
const mailAdapter = new NodeMailerMailAdapter();
const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  feedbackRepository,
  mailAdapter
);
const submitFeedbackController = new SubmitFeedbackController(
  submitFeedbackUseCase
);

const routes = Router();

routes.post("/feedbacks", (req, res) => {
  submitFeedbackController.handle(req, res);
});

export { routes };
