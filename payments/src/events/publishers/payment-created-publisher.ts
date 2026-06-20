import { Subjects, Publisher, PaymentCreatedEvent } from '@vrkktickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
