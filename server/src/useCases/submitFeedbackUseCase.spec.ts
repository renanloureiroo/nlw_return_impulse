// import { MailAdapter } from "../adapters/mailAdapter";
// import { IFeedbackRepository } from "../repositories/IFeedbackRepository";
import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase";

// let feedbackRepository: IFeedbackRepository;
// let nodeMailerMailAdapter: MailAdapter;
let submitFeedbackUseCase: SubmitFeedbackUseCase;

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe("Submit feedback", () => {
  beforeEach(() => {
    submitFeedbackUseCase = new SubmitFeedbackUseCase(
      { create: createFeedbackSpy },
      { sendMail: sendMailSpy }
    );
  });
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "data:image/png;base64/test.jpg",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit a feedback with screenshot incorrect format", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "test.jpg",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback without type", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "",
        comment: "example comment",
        screenshot: "data:image/png;base64/test.jpg",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback without comment", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64/test.jpg",
      })
    ).rejects.toThrow();
  });
});
