import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

const EventDetailPage = () => {
  const router = useRouter();

  // gives us access to the value from the URL
  const eventId = router.query.eventId;
  console.log("ID", eventId);

  const event = getEventById(eventId);
  console.log("EVENT", event);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  const { title, description, location, date, image } = event;

  return (
    <>
      <EventSummary title={title} />
      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
