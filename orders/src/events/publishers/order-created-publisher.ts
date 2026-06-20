import { Publisher, OrderCreatedEvent, Subjects } from '@vrkktickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
