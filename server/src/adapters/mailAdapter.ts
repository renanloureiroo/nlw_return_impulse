interface SendMailData {
  subject: string;
  body: string;
}

interface MailAdapter {
  sendMail: (data: SendMailData) => Promise<void>;
}

export { SendMailData, MailAdapter };
