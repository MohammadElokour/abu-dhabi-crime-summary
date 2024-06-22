import { Layer, Source, useMap } from "react-map-gl";
import { sectorInAlManhal } from "@src/constants/mapAreas";
import { getGeoData } from "@src/utils/getGeoData";
import React from "react";
import { INITIAL_MAP_ZOOM } from "@src/constants/general";

const { zoom: defaultZoom, longitude, latitude } = sectorInAlManhal;

const SectorInAlManhal = ({
  isModalOpen = false,
  setSummaryId,
  toggleModal,
  openTooltip,
}: {
  isModalOpen: boolean;
  setSummaryId: (summaryId: string) => void;
  toggleModal: (isOpen?: boolean) => void;
  openTooltip: (
    isOpen?: boolean,
    id?: string,
    position?: { x: number; y: number }
  ) => void;
}) => {
  const { point, pointsOfInterest } = getGeoData("sector-in-al-manhal");
  const { current: map } = useMap();
  const [zoom, setZoom] = React.useState(INITIAL_MAP_ZOOM);

  React.useEffect(() => {
    if (!map) {
      return;
    }

    map.on("zoom", () => {
      setZoom(map.getZoom());
    });

    const handelImageClick = () => {
      setSummaryId("sector-in-al-manhal");
      map.flyTo({
        center: [longitude, latitude],
        zoom: defaultZoom,
        speed: 1.5,
      });
      if (zoom === defaultZoom) {
        toggleModal(true);
      }
    };

    if (zoom === defaultZoom && isModalOpen) {
      toggleModal(true);
    }
    map.on(
      "mouseenter",
      ["steeling-1", "steeling-2", "steeling-3", "steeling-4"],
      () => {
        map.getCanvas().style.cursor = "pointer";
      }
    );

    map.on("mousemove", ["steeling-1"], (e) => {
      openTooltip(true, "steeling-1", e.point);
    });
    map.on("mousemove", ["steeling-2"], (e) => {
      openTooltip(true, "steeling-2", e.point);
    });
    map.on("mousemove", ["steeling-3"], (e) => {
      openTooltip(true, "steeling-3", e.point);
    });
    map.on("mousemove", ["steeling-4"], (e) => {
      openTooltip(true, "steeling-4", e.point);
    });

    map.on(
      "mouseleave",
      ["steeling-1", "steeling-2", "steeling-3", "steeling-4"],
      () => {
        map.getCanvas().style.cursor = "";
        openTooltip(false);
      }
    );

    map.on("click", "red-zone-layer", handelImageClick);

    return () => {
      map.off("click", "red-zone-layer", handelImageClick);
    };
  }, [isModalOpen, map, openTooltip, setSummaryId, toggleModal, zoom]);

  return (
    <>
      <Source id="sector-in-al-manhal" type="geojson" data={point}>
        <Layer
          id="red-zone-layer"
          type="symbol"
          minzoom={7}
          layout={{
            "icon-image": "warning",
            "icon-size": 1,
          }}
        />
      </Source>
      {pointsOfInterest?.map(({ id, point, type, time }) => (
        <Source key={id} id={id} type="geojson" data={point}>
          <Layer
            id={id}
            type="symbol"
            minzoom={15}
            layout={{
              "icon-image": "steeling",
              "icon-size": 0.07,
              "text-offset": [0, 3.5],
              "text-field": `${type} ${time}`,
            }}
          />
        </Source>
      ))}
    </>
  );
};

export default SectorInAlManhal;
