import { Publisher, Subjects, TicketUpdatedEvent } from '@vrkktickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
