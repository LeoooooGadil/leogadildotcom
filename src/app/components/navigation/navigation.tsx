import React from "react";
import Tabs from "./tabs";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between py-4 pb-1 pt-5 px-4">
      <div className="flex items-center justify-between space-x-12 bg-[--color-dark-accent] p-2.5 rounded-2xl drop-shadow-lg max-w-96 lg:max-w-none mx-auto w-56 h-12">
        <Tabs />
      </div>
    </div>
  );
};

export default Navigation;
