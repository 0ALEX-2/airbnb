import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import SmallCard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";
import Footer from "@/components/Footer";

export default function Home({ exploreData, cardData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="py-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.isArray(exploreData) &&
              exploreData.length > 0 &&
              exploreData.map((elm) => (
                <SmallCard
                  key={elm?.img}
                  img={elm?.img}
                  location={elm?.location}
                  distance={elm?.distance}
                />
              ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {Array.isArray(cardData) &&
              cardData.length > 0 &&
              cardData.map((elm) => (
                <MediumCard key={elm?.img} img={elm?.img} title={elm?.title} />
              ))}
          </div>
        </section>

        <LargeCard
          img={"https://links.papareact.com/4cj"}
          title={"The Greatest Outdoors"}
          description={"Wishlists created by Airbnb."}
          buttonText={"Get Inspired"}
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // const exploreData = await fetch("https://links.papareact.com/pyp").then((res)=>res.json());
  //const cardData=await fetch('https://links.papareact.com/zp1).then((res)=>res.json());
  
  const exploreData = [
    {
      img: "https://links.papareact.com/kji",
      location: "London",
      distance: "45-minute drive",
    },
    {
      img: "https://links.papareact.com/kji",
      location: "Manchester",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/kji",
      location: "Liverpool",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/kji",
      location: "York",
      distance: "4-hour drive",
    },
    {
      img: "https://links.papareact.com/kji",
      location: "Cardiff",
      distance: "45-minute drive",
    },
    {
      img: "https://links.papareact.com/kji",
      location: "Birkenhead",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/kji",
      location: "Newquay",
      distance: "6-hour drive",
    },
    {
      img: "https://links.papareact.com/kji",
      location: "Hove",
      distance: "2-hour drive",
    },
  ];
  const cardData=[
    {
      "img": "https://links.papareact.com/2io",
      "title": "Outdoor getaways"
    },
    {
      "img": "https://links.papareact.com/q7j",
      "title": "Unique stays"
    },
    {
      "img": "https://links.papareact.com/s03",
      "title": "Entire homes"
    },
    {
      "img": "https://links.papareact.com/8ix",
      "title": "Pet allowed"
    }
  ]

  return {
    props: {
      exploreData,
      cardData
    },
  };
}