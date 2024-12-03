import { v4 as uuidv4 } from 'uuid';
export default function generateRandomEmail() {
    const emailPrefix = 'vika';
    const domain = '@gmail.com';
    const uuid = uuidv4().substr(0, 8);
    const randomEmail = `${emailPrefix}${uuid}${domain}`;
    return randomEmail;
}