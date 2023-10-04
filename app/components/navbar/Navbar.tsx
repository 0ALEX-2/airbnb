import React from "react";
import Container from "../Container";

export const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            This is the navbar (16.8)
          </div>
        </Container>
      </div>
    </div>
  );
};
