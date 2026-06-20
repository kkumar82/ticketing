import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@vrkktickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
