export class Message {
  timeSent: Date;
  content: string;

  constructor(content: string) {
    this.timeSent = new Date();
    this.content = content;
  }

  getTimestamp(): string {
    let hour = this.timeSent.getHours();
    let minutes = this.timeSent.getMinutes();
    return `${(hour < 10 ? '0' : '') + hour}:${
      (minutes < 10 ? '0' : '') + minutes
    }`;
  }
}
