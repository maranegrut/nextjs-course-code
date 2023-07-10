import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import { getFilteredEvents } from "../../dummy-data";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import Head from "next/head";

const FilteredEventsPage = () => {
  console.log("FILTERED EVENTS PAGE");
  const router = useRouter();
  const filterData = router.query.slug; // is an array of the segments in the url (year, month)

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear; // convert to number
  const numMonth = +filteredMonth;

  const PageHeadData = () => {
    return (
      <Head>
        <title>Filtered Events</title>
        <meta
          name="description"
          content={`All events for ${numMonth}/${numYear}`}
        />
      </Head>
    );
  };

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <PageHeadData />
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );
  }

  const events = getFilteredEvents({ year: numYear, month: numMonth });
  const date = new Date(numYear, numMonth - 1);

  if (!events || events.length === 0) {
    return (
      <>
        <PageHeadData />
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeadData />
      <ResultsTitle date={date} />
      <EventList events={events} />
    </>
  );
};

export default FilteredEventsPage;
