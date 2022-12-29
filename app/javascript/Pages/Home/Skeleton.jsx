import React from "react";

function Skeleton() {
  return (
    <div className="flex flex-row flex-wrap">
      {[...Array(18).keys()].map((item) => (
        <div key={item} className="w-40 sm:w-60 h-96 border m-1 animate-pulse">
          <div className="w-40 sm:w-60 h-60 bg-gray-200" />

          <div className="border-t p-2 text-start">
            <div className="w-36 sm:w-52 h-5 bg-gray-200 rounded-lg mb-1" />
            <div className="w-28 sm:w-40 h-10 bg-gray-200 rounded-lg mb-1" />
            <div className="w-24 sm:w-32 h-5 bg-gray-200 rounded-lg mb-1" />
            <div className="w-36 sm:w-56 h-9 bg-gray-200 rounded-lg mb-1" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skeleton;
