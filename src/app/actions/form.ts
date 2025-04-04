"use server";

import EmailTemplate from "@/components/email-template";
import { Resend } from "resend";

interface UserInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message?: string;
  receiveEmail?: boolean;
}

const RESEND = new Resend(process.env.RESEND_API_URL);

export async function sendEmail(
  userInfo: UserInfo,
  name: string
): Promise<void> {
  const { data, error } = await RESEND.emails.send({
    from: "Marc Bensan <marc@updates.marcbensan.com>",
    to: ["euniceritchesdolor@gmail.com"],
    subject: "Connect Group Request",
    react: EmailTemplate({ user: userInfo, leader: name }),
  });

  console.log(userInfo);

  if (error) {
    console.log(error);
  }

  console.log(data);
}
