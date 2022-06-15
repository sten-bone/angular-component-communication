export class Message {
  timeSent: Date;
  content: string;

  constructor(content: string) {
    this.timeSent = new Date();
    this.content = content;
  }

  getTimestamp(): string {
    return `${this.timeSent
      .getHours()
      .toString()
      .padStart(2, '0')}:${this.timeSent
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  }
}
