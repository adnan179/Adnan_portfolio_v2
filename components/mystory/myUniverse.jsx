import Image from "next/image";
import React from "react";
import { Gallery } from "react-gallery-grid";
import { imagesArray } from "@/data/MyUniverseData";

const MyUniverse = () => {
  return (
    <div className="flex flex-row gap-3 w-full overflow-auto custom-scrollbar">
      <Gallery
        items={imagesArray}
        itemRenderer={({ item }) => (
          <Image
            src={item.src}
            width={item.width}
            height={item.height}
            alt={item.alt}
            className="object-cover"
          />
        )}
        rowHeightRange={{ min: 200, max: 350 }}
        gap={8}
        preserveAspectRatio={true}
      />
    </div>
  );
};

export default MyUniverse;
