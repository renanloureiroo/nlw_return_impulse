import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b55b38aaa7a1df",
    pass: "1e8e613744aa10",
  },
});

class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Renan Loureiro <renanloureiro.dev@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}

export { NodeMailerMailAdapter };
