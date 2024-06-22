import React from "react";
import { Layer, Source, useMap } from "react-map-gl";
import { abuDhabi } from "@src/constants/mapAreas";
import { getGeoData } from "@src/utils/getGeoData";
import {
  DEFAULT_EASE_DURATION,
  INITIAL_MAP_ZOOM,
} from "@src/constants/general";

const { zoom: defaultZoom, longitude, latitude } = abuDhabi;

const AbuDhabiLayer = ({
  setSummaryId,
  toggleModal,
  openTooltip,
}: {
  setSummaryId: (summaryId: string) => void;
  toggleModal: (isOpen?: boolean) => void;
  openTooltip: (
    isOpen?: boolean,
    id?: string,
    position?: { x: number; y: number }
  ) => void;
}) => {
  const { point, pointsOfInterest } = getGeoData("abu-dhabi");
  const { current: map } = useMap();
  const [zoom, setZoom] = React.useState(INITIAL_MAP_ZOOM);

  const openModalDelay = React.useMemo(() => {
    return zoom < defaultZoom ? DEFAULT_EASE_DURATION : 0;
  }, [zoom]);

  React.useEffect(() => {
    if (!map) {
      return;
    }

    map.on("zoom", () => {
      setZoom(map.getZoom());
    });

    const handelImageClick = () => {
      setSummaryId("abu-dhabi");
      map.easeTo({
        center: [longitude, latitude],
        zoom: defaultZoom,
        duration: DEFAULT_EASE_DURATION,
      });
      setTimeout(() => {
        toggleModal(true);
      }, openModalDelay);
    };

    map.on("click", "abu-dhabi-layer", handelImageClick);

    map.on(
      "mouseenter",
      [
        "criminal-1",
        "criminal-2",
        "criminal-3",
        "criminal-4",
        "criminal-5",
        "abu-dhabi-layer",
        "red-zone-layer",
        "police-station-layer",
      ],
      () => {
        map.getCanvas().style.cursor = "pointer";
      }
    );
    map.on("mousemove", ["criminal-1"], (e) => {
      openTooltip(true, "criminal-1", e.point);
    });
    map.on("mousemove", ["criminal-2"], (e) => {
      openTooltip(true, "criminal-2", e.point);
    });
    map.on("mousemove", ["criminal-3"], (e) => {
      openTooltip(true, "criminal-3", e.point);
    });
    map.on("mousemove", ["criminal-4"], (e) => {
      openTooltip(true, "criminal-4", e.point);
    });
    map.on("mousemove", ["criminal-5"], (e) => {
      openTooltip(true, "criminal-5", e.point);
    });

    map.on(
      "mouseleave",
      [
        "abu-dhabi-layer",
        "red-zone-layer",
        "police-station-layer",
        "criminal-1",
        "criminal-2",
        "criminal-3",
        "criminal-4",
        "criminal-5",
      ],
      () => {
        map.getCanvas().style.cursor = "";
        openTooltip(false);
      }
    );

    return () => {
      map.off("click", "abu-dhabi-layer", handelImageClick);
    };
  }, [map, openModalDelay, openTooltip, setSummaryId, toggleModal]);

  return (
    <>
      <Source id="abu-dhabi" type="geojson" data={point}>
        <Layer
          id="abu-dhabi-layer"
          type="symbol"
          minzoom={7}
          layout={{
            "icon-image": "abu-dhabi",
            "icon-size": 0.2,
          }}
        />
      </Source>
      {pointsOfInterest?.map(({ id, point }) => (
        <Source key={id} id={id} type="geojson" data={point}>
          <Layer
            id={id}
            type="symbol"
            minzoom={8}
            layout={{
              "icon-image": "criminal",
              "icon-size": 0.05,
              "text-offset": [0, 3.5],
            }}
          />
        </Source>
      ))}
    </>
  );
};

export default AbuDhabiLayer;
