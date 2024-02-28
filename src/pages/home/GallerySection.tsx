import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  {
    original: "https://i.postimg.cc/15V5PHKQ/images.jpg",
    thumbnail: "https://i.postimg.cc/15V5PHKQ/images.jpg",
    description: "Blood donation campaign for injured people.",
  },
  {
    original: "https://i.postimg.cc/yxk6DX40/sd.jpg",
    thumbnail: "https://i.postimg.cc/yxk6DX40/sd.jpg",
    description: "Relief for homeless people.",
  },
  {
    original: "https://i.postimg.cc/HkQY8kKv/sdg.jpg",
    thumbnail: "https://i.postimg.cc/HkQY8kKv/sdg.jpg",
    description: "Seminar after successful donation campaign.",
  },
  {
    original: "https://i.postimg.cc/GpKbzSbk/sfd.jpg",
    thumbnail: "https://i.postimg.cc/GpKbzSbk/sfd.jpg",
    description: "Donation goods package.",
  },
  {
    original: "https://i.postimg.cc/2yMkhbrM/sgd.jpg",
    thumbnail: "https://i.postimg.cc/2yMkhbrM/sgd.jpg",
    description: "Book donation campaign for poor student.",
  },
  {
    original: "https://i.postimg.cc/c1b4Vjwh/Untitled.jpg",
    thumbnail: "https://i.postimg.cc/c1b4Vjwh/Untitled.jpg",
    description: "Donate food in flood disaster peoples.",
  },
];
const GallerySection = () => {
  return (
    <div className="container mx-auto my-8 p-4 rounded-md sm:px-8 lg:px-12 xl:px-16 overflow-hidden text-center">
      <h2 className="text-3xl font-bold mb-4">
        Donation and Humanitarian Works Gallery
      </h2>
      <p className="text-lg mb-8">
        Explore the impactful photos showcasing our donations and humanitarian
        efforts, <br /> fostering transparency and trust among our users.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-4">
        <Gallery items={images} />
      </div>
    </div>
  );
};

export default GallerySection;
