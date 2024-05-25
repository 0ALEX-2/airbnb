import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import React from "react";
import { format } from "date-fns";
import InfoCard from "@/components/InfoCard";
import MapBox from "@/components/Map";

const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGusts } = router.query;
  const formattedStartDate =
    startDate && format(new Date(startDate), "dd MMM yy");
  const formattedEndDate = endDate && format(new Date(endDate), "dd MMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  console.log(searchResults, "search");
  return (
    <div>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGusts} guests`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays for {numberOfGusts} number of gusts
          </p>
          <h1 className="text-3xl font-semibold mt-2">Stays in {location}</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap mt-5">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div>
            {Array.isArray(searchResults) &&
              searchResults.length > 0 &&
              searchResults.map((elm, index) => {
                return (
                  <InfoCard
                    key={index}
                    img={elm.img}
                    location={elm.location}
                    title={elm.title}
                    description={elm.description}
                    star={elm.star}
                    price={elm.price}
                    total={elm.total}
                  />
                );
              })}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <MapBox />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS")
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return {
    props: {
      searchResults,
    },
  };
}
