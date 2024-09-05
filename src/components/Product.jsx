import React, { useState } from "react";
import Button from "./Button";

const Product = ({ val, mover, count, videoUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full py-20 h-[23rem] text-white"
      onMouseEnter={() => {
        mover(count);
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Video */}
      {isHovered && (
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={videoUrl}
          autoPlay
          muted
          loop
        />
      )}
      {/* Overlay content */}
      <div className="relative max-w-screen-xl mx-auto flex justify-between items-center z-10">
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center gap-5">
            {val.live && <Button title="Live Preview" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
      {/* Dark Overlay */}
      <div className={`absolute inset-0 bg-black opacity-50 z-0 ${isHovered ? "visible" : "invisible"}`}></div>
    </div>
  );
};

export default Product;
