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
}: {
  setSummaryId: (summaryId: string) => void;
  toggleModal: (isOpen?: boolean) => void;
}) => {
  const { point, title } = getGeoData("abu-dhabi");
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
      ["abu-dhabi-layer", "red-zone-layer", "police-station-layer"],
      () => {
        map.getCanvas().style.cursor = "pointer";
      }
    );
    map.on(
      "mouseleave",
      ["abu-dhabi-layer", "red-zone-layer", "police-station-layer"],
      () => {
        map.getCanvas().style.cursor = "";
      }
    );

    return () => {
      map.off("click", "abu-dhabi-layer", handelImageClick);
    };
  }, [map, openModalDelay, setSummaryId, toggleModal]);

  return (
    <Source id="abu-dhabi" type="geojson" data={point}>
      <Layer
        id="abu-dhabi-layer"
        type="symbol"
        layout={{
          "icon-image": "abu-dhabi",
          "icon-size": 1,
          "icon-allow-overlap": true,
          "text-field": title,
          "text-font": ["Open Sans Medium"],
          "text-size": 24,
          "text-allow-overlap": true,
          "text-offset": [0, 3.5],
        }}
      />
    </Source>
  );
};

export default AbuDhabiLayer;
