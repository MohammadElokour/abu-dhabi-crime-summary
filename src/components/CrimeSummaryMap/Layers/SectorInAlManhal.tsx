import { Layer, Source, useMap } from "react-map-gl";
import { sectorInAlManhal } from "@src/constants/mapAreas";
import { getGeoData } from "@src/utils/getGeoData";
import React from "react";
import { INITIAL_MAP_ZOOM } from "@src/constants/general";

const { zoom: defaultZoom, longitude, latitude } = sectorInAlManhal;

const SectorInAlManhal = ({
  setSummaryId,
  toggleModal,
}: {
  setSummaryId: (summaryId: string) => void;
  toggleModal: (isOpen?: boolean) => void;
}) => {
  const { point } = getGeoData("sector-in-al-manhal");
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

    if (zoom === defaultZoom) {
      toggleModal(true);
    }

    map.on("click", "red-zone-layer", handelImageClick);

    return () => {
      map.off("click", "red-zone-layer", handelImageClick);
    };
  }, [map, setSummaryId, toggleModal, zoom]);
  return (
    <Source id="sector-in-al-manhal" type="geojson" data={point}>
      <Layer
        id="red-zone-layer"
        type="symbol"
        layout={{
          "icon-image": "warning",
          "icon-size": 1,
        }}
      />
    </Source>
  );
};

export default SectorInAlManhal;
