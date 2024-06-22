import { useEffect } from "react";
import { useMap } from "react-map-gl";

function MapImagesLoader() {
  const { current: map } = useMap();

  useEffect(() => {
    if (!map) return;
    const images = [
      {
        name: "abu-dhabi",
        url: "/images/map-images/abu-dhabi.png",
      },
      {
        name: "warning",
        url: "/images/map-images/warning.png",
      },
      {
        name: "police-station",
        url: "/images/map-images/police-station.png",
      },
      {
        name: "steeling",
        url: "/images/map-images/steeling.png",
      },
      {
        name: "criminal",
        url: "/images/map-images/criminal.png",
      },
      {
        name: "police-car",
        url: "/images/map-images/police-car.png",
      },
    ];

    images.forEach((image) => {
      map.loadImage(image.url, (error, loadedImage) => {
        if (error) throw error;
        const mapImage = loadedImage as HTMLImageElement;
        if (!map.hasImage(image.name)) map.addImage(image.name, mapImage);
      });
    });
  });

  return null;
}

export default MapImagesLoader;
