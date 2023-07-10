import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
import Head from "next/head";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="find events" />
      </Head>
      <EventList events={featuredEvents} />
    </div>
  );
};

export default HomePage;
