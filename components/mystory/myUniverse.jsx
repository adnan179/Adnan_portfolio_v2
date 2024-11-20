import React from "react";
import { Gallery } from "react-grid-gallery";

const photos = [
  {
    src: "https://drive.google.com/file/d/17KGK_C9GUHxYXyCIgeSXl0aUgGYRcHkq/view?usp=sharing",
    width: 320,
    height: 174,
    isSelected: true,
    caption: "Bike ride from Mysore to Bengaluru",
  },
  {
    src: "https://drive.google.com/file/d/1ayl_VitxeVNC5Fu2lOvPdmvI1J_41vWf/view?usp=sharing",
    width: 320,
    height: 212,
    tags: [{ value: "Mountains", title: "Mountains" }],
    alt: "Nandi Hills",
  },
  {
    src: "https://drive.google.com/file/d/1WJdiEwWueqvOpt5H4h-Fhy8iNCQRCLRn/view?usp=drive_link",
    width: 320,
    height: 212,
  },
];
const MyUniverse = () => {
  return (
    <div className="flex w-full ">
      <Gallery images={photos} />
    </div>
  );
};

export default MyUniverse;
