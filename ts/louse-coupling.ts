interface MessageService {
  sendMessage(message: string): void;
}

class EmailService implements MessageService {
  sendMessage(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

class SMSService implements MessageService {
  sendMessage(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

class Notification {
  private messageService: MessageService;

  constructor(messageService: MessageService) {
    this.messageService = messageService;
  }

  sendNotification(message: string): void {
    this.messageService.sendMessage(message);
  }
}

// Usage
const emailService = new EmailService();

const emailNotification = new Notification(emailService);
emailNotification.sendNotification("This is an email notification");

const smsService = new SMSService();

const smsNotification = new Notification(smsService);
smsNotification.sendNotification("This is an SMS notification");
