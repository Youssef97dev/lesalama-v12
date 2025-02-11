"use client";
import React from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Link from "next/link";
import Image from "next/image";

const galleryItems = [
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/salama-sah-4_dk656w",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/salama-sah-4_dk656w",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/salama-sah-5_ntsfxv",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/salama-sah-5_ntsfxv",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/salama-sah-2_kcekby",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/salama-sah-2_kcekby",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/salama-sah-3_l2zn1q",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/salama-sah-3_l2zn1q",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/sssss_kpsscz",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/sssss_kpsscz",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/salama_20-min_m92cvb",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/salama_20-min_m92cvb",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/menu-gallery-4_wgjmar",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/menu-gallery-4_wgjmar",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/menu-gallery-1_q5pijt",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/menu-gallery-1_q5pijt",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/platmobile_muezyg",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/platmobile_muezyg",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/icfrcmy3sxst4bobsp5r",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/icfrcmy3sxst4bobsp5r",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/lbhwn2jkfj2egatvhlku",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/lbhwn2jkfj2egatvhlku",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/uqwxcsj3f0mqw4ywfd0u",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/uqwxcsj3f0mqw4ywfd0u",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/aed9h6xneawaaqh9aqz4",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/aed9h6xneawaaqh9aqz4",
  },
];

const MemoizedImage = React.memo(({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    layout="responsive"
    width={300}
    height={300}
    loading="lazy" // Lazy loading
    className="rounded-sm"
  />
));

// Setting the display name for the MemoizedImage component
MemoizedImage.displayName = "MemoizedImage";

const ImageGallery = () => {
  return (
    <div className="mx-auto py-5 px-4">
      <LightGallery
        speed={500}
        plugins={[lgThumbnail]}
        elementClassNames="masonry"
      >
        {galleryItems?.map((image, index) => (
          <Link href={image.thumbnail} key={index}>
            <div className="masonry-item relative shadow-lg hover:scale-105 transition-all ease-linear overflow-hidden">
              <MemoizedImage src={image.src} alt={`Le salama ${index}`} />
            </div>
          </Link>
        ))}
      </LightGallery>
    </div>
  );
};

export default ImageGallery;
