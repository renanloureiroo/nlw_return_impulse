import { Request, Response } from "express";
import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase";

class SubmitFeedbackController {
  constructor(private submitFeedbackUseCase: SubmitFeedbackUseCase) {}

  async handle(request: Request, response: Response) {
    const { type, comment, screenshot } = request.body;

    await this.submitFeedbackUseCase.execute({
      comment,
      type,
      screenshot,
    });

    response.status(201).end();
  }
}

export { SubmitFeedbackController };
