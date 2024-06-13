import React from "react";
import MapBoxGL, { MapProps, MapRef } from "react-map-gl";

const defaultMapCenter = [54.377462, 24.45385];
const mapStyle = import.meta.env.VITE_MAPBOX_STYLE;
const mapboxAccessToken = import.meta.env.VITE_MAPBOX_TOKEN;

type MapComponentProps = MapProps & {
  enableScale?: boolean;
  enableNavigation?: boolean;
  mapCenter?: [number, number];
};

function MapComponent(
  props: MapComponentProps,
  ref: React.LegacyRef<MapRef> | undefined
) {
  const { mapCenter, zoom, children } = props;
  const [isLoading, setIsLoading] = React.useState(true);
  const [center, setCenter] = React.useState<number[]>(defaultMapCenter);

  React.useEffect(() => {
    if (mapCenter) {
      setCenter(mapCenter);
    }
  }, [mapCenter]);

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
        initialViewState={{
          longitude: center[0],
          latitude: center[1],
          zoom: zoom ?? 13,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle={mapStyle}
        attributionControl={false}
        {...props}
      >
        {children}
      </MapBoxGL>
      {isLoading && (
        <div className="absolute-center">
          <img
            className="rounded-2xl"
            src="/loading-map.gif"
            alt="Loading..."
          />
        </div>
      )}
    </div>
  );
}

export default React.forwardRef(MapComponent);
