
import { Link, useParams } from "react-router";
import { useState } from "react";
import { events } from "../data/events";
import EventSignupForm from "../components/EventSignupForm";

function EventDetailsPage() {
  const { eventId } = useParams();
  const event = events.find(
    (item) => item.id === Number(eventId)
  );

  const [seatsLeft, setSeatsLeft] = useState(
    event?.seats ?? 0
  );
  const [message, setMessage] = useState("");

  if (!event) {
    return (
      <section>
        <h1>Event not found</h1>
        <p>No event with id {eventId}.</p>
        <Link to="/events">Back to events</Link>
      </section>
    );
  }

  function handleSignup(tickets: number, name: string) {
    setSeatsLeft((current) => current - tickets);
    setMessage(`Booked: ${tickets} for ${name}.`);
  }

  return (
    <section className="events-page">
      <article className="card">
        <h1>{event.title}</h1>
        <p>{event.date}</p>
        <p>{event.place}</p>
        <p>Seats left: {seatsLeft}</p>

        {seatsLeft > 0 ? (
          <EventSignupForm
            event={event}
            seatsLeft={seatsLeft}
            onSignup={handleSignup}
          />
        ) : (
          <p>No seats left.</p>
        )}

        {message && <p role="status">{message}</p>}

        <p>
          <Link to="/events">Back to events</Link>
        </p>
      </article>
    </section>
  );
}

export default EventDetailsPage;
