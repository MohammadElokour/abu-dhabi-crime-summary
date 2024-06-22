import React from "react";
import { Layer, Source, useMap } from "react-map-gl";
import { policeStation } from "@src/constants/mapAreas";
import { getGeoData } from "@src/utils/getGeoData";
import { INITIAL_MAP_ZOOM } from "@src/constants/general";

const { zoom: defaultZoom, longitude, latitude } = policeStation;

const PoliceStationLayer = ({
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
  const { point, pointsOfInterest } = getGeoData("police-station");
  const { current: map } = useMap();
  const [zoom, setZoom] = React.useState(INITIAL_MAP_ZOOM);

  React.useEffect(() => {
    if (!map) {
      return;
    }

    map.on("zoom", () => {
      setZoom(map.getZoom());
    });

    map.on(
      "mouseenter",
      ["report-1", "report-2", "report-3", "report-4"],
      () => {
        map.getCanvas().style.cursor = "pointer";
      }
    );

    map.on("mousemove", ["report-1"], (e) => {
      openTooltip(true, "report-1", e.point);
    });
    map.on("mousemove", ["report-2"], (e) => {
      openTooltip(true, "report-2", e.point);
    });
    map.on("mousemove", ["report-3"], (e) => {
      openTooltip(true, "report-3", e.point);
    });
    map.on("mousemove", ["report-4"], (e) => {
      openTooltip(true, "report-4", e.point);
    });

    map.on(
      "mouseleave",
      ["report-1", "report-2", "report-3", "report-4"],
      () => {
        map.getCanvas().style.cursor = "";
        openTooltip(false);
      }
    );

    const handelImageClick = () => {
      setSummaryId("police-station");
      map.flyTo({
        center: [longitude, latitude],
        zoom: defaultZoom,
        speed: 1.5,
      });
      if (zoom === defaultZoom) {
        toggleModal(true);
      }
    };

    if (zoom === defaultZoom) {
      toggleModal(true);
    }

    map.on("click", "police-station-layer", handelImageClick);

    return () => {
      map.off("click", "police-station-layer", handelImageClick);
    };
  }, [map, openTooltip, setSummaryId, toggleModal, zoom]);

  return (
    <>
      <Source id="police-station" type="geojson" data={point}>
        <Layer
          id="police-station-layer"
          type="symbol"
          minzoom={7}
          layout={{
            "icon-image": "police-station",
            "icon-size": 0.1,
          }}
        />
      </Source>
      {pointsOfInterest?.map(({ id, point, type, time }) => (
        <Source key={id} id={id} type="geojson" data={point}>
          <Layer
            id={id}
            type="symbol"
            minzoom={12}
            layout={{
              "icon-image": "police-car",
              "icon-size": 0.12,
              "text-offset": [0, 3.5],
              "text-field": `${type}
               ${time}`,
            }}
          />
        </Source>
      ))}
    </>
  );
};

export default PoliceStationLayer;
