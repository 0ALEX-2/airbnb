import Image from 'next/image'
import React, { useState } from "react";
import { FaSearch, FaUser, FaUserFriends } from "react-icons/fa";
import { IoGlobeSharp, IoMenu } from "react-icons/io5";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGusts, setNumberOfGusts] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      {/* left */}
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={() => router.push("/")}
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="Airbnb"
        />
      </div>

      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          className="placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none text-gray-600"
          type="text"
          placeholder="Start your search"
          value={searchInput}
        />
        <FaSearch className="h-8 w-8 p-2 bg-red-400 text-white rounded-full cursor-pointer hidden md:inline-flex md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex space-x-3 items-center text-gray-500 justify-end">
        <p className="text-lg hidden md:inline cursor-pointer">Become a host</p>
        <IoGlobeSharp className="h-6 cursor-pointer text-lg" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <IoMenu className="h-6 cursor-pointer" />
          <FaUser className="h-6 cursor-pointer" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <FaUserFriends className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={numberOfGusts}
              onChange={(e) => setNumberOfGusts(e.target.value)}
              min={1}
            />
          </div>
          <div className="flex">
            <button
              onClick={() => setSearchInput("")}
              className="flex-grow text-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={() => router.push("/search")}
              className="flex-grow text-red-400"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header