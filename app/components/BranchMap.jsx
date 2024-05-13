// components/BranchMap.jsx
'use client'
import React from "react";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
});

const BranchMap = () => {
  return (
    <div className="h-full w-full">
      <MapComponent />
    </div>
  );
};

export default BranchMap;
