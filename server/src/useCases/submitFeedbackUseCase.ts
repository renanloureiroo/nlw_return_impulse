import { MailAdapter } from "../adapters/mailAdapter";
import { IFeedbackRepository } from "../repositories/IFeedbackRepository";

interface ISubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

class SubmitFeedbackUseCase {
  constructor(
    private feedbackRepository: IFeedbackRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute({ comment, type, screenshot }: ISubmitFeedbackUseCaseRequest) {
    if (!type) {
      throw new Error("Type is required");
    }

    if (!comment) {
      throw new Error("Comment is required");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format!");
    }

    await this.feedbackRepository.create({
      comment,
      type,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: "Novo feedback",
      body: [
        '<div style="foot-family: sans-serif; font-size: 16px; color: #111;">',
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot && `<img src="${screenshot}" />`,
        "</div>",
      ].join("\n"),
    });
  }
}

export { SubmitFeedbackUseCase };
