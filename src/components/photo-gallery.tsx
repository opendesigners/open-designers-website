import Image from "next/image";
import pic1 from "@/public/pic-1.png";
import pic2 from "@/public/pic-2.png";
import pic3 from "@/public/pic-3.png";
import pic4 from "@/public/pic-4.png";
import pic5 from "@/public/pic-5.png";
import pic6 from "@/public/pic-6.png";
import pic7 from "@/public/pic-7.png";
import pic8 from "@/public/pic-8.png";
import pic9 from "@/public/pic-9.png";
import pic10 from "@/public/pic-10.png";
import pic11 from "@/public/pic-11.png";
import pic12 from "@/public/pic-12.png";

const PhotoGallery = () => {
  const columns = [
    { images: [pic1, pic2], alt: ["pic-1", "pic-2"] },
    { images: [pic3, pic4], alt: ["pic-3", "pic-4"] },
    { images: [pic5, pic6], alt: ["pic-5", "pic-6"] },
    { images: [pic7, pic8], alt: ["pic-7", "pic-8"] },
    { images: [pic9, pic10], alt: ["pic-9", "pic-10"] },
    { images: [pic11, pic12], alt: ["pic-11", "pic-12"] },
  ];

  return (
    <div className="grid grid-cols-6 gap-10">
      {columns.map((column, index) => (
        <div
          key={index}
          className={`flex flex-col gap-4 ${index % 2 === 1 ? "mt-20" : ""}`}
        >
          {column.images.map((image, imageIndex) => (
            <Image
              key={imageIndex}
              src={image}
              alt={column.alt[imageIndex]}
              className=""
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
