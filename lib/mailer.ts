export interface Email {
  fullName: string;
  from: string;
  subject: string;
  message: string;
  sendTo: string;
}

class MailerService {

  private baseURL = process.env.NEXT_PUBLIC_GLOBAL_API_BASE_URL_PRODUCTION;

  async sendEmail(payload: Email): Promise<any> {
    const url = `${this.baseURL}mailer/dev-team-email`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      throw new Error(errorBody.message || 'Error al procesar la solicitud de envío');
    }
    return response.json();
  }
  
}

export const mailerService = new MailerService();
export const DEFAULT_MAIL_RECIPIENT = process.env.NEXT_PUBLIC_EMAILTOSEND;