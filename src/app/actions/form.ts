"use server";

interface UserInfo {
  firstName: string;
  lastNamme: string;
  phone: string;
  email: string;
  message?: string;
  receiveEmail?: boolean;
}
export async function sendEmail(userInfo: UserInfo): Promise<void> {
    
}
