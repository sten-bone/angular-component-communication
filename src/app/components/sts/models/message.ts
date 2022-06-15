export class Message {
  timeSent: Date;
  sender: string;

  content: string;
  timestamp : string;

  constructor(sender: string, content: string) {
    this.timeSent = new Date();
    this.sender = sender;
    this.content = content;
    this.timestamp = this.getTimestamp();
  }

  private getTimestamp(): string {
    return `${this.timeSent
      .getHours()
      .toString()
      .padStart(2, '0')}:${this.timeSent
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  }
}
