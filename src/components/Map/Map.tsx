/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { abuDhabi } from "@src/constants/mapAreas";
import MapBoxGL, { MapProps, MapRef } from "react-map-gl";
import MapImagesLoader from "./components/MapImagesLoader";

const defaultMapStyle = import.meta.env.VITE_MAPBOX_STYLE;
const mapboxAccessToken = import.meta.env.VITE_MAPBOX_TOKEN;

function MapComponent(
  props: MapProps,
  ref: React.LegacyRef<MapRef> | undefined
) {
  const { children, ...rest } = props;
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative size-full">
      <MapBoxGL
        ref={ref}
        onLoad={handleLoad}
        onError={(error) => console.error(error)}
        mapboxAccessToken={mapboxAccessToken}
        mapLib={import("mapbox-gl")}
        initialViewState={abuDhabi}
        style={{ width: "100%", height: "100%" }}
        mapStyle={defaultMapStyle}
        attributionControl={false}
        {...rest}
      >
        <MapImagesLoader />
        {children}
      </MapBoxGL>
      {isLoading && (
        <div className="absolute-center">
          <img
            className="rounded-2xl scale-50"
            src="/loading-map.gif"
            alt="Loading..."
          />
        </div>
      )}
    </div>
  );
}

export default React.forwardRef(MapComponent);
