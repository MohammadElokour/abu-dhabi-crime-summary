import {
  abuDhabi,
  policeStation,
  sectorInAlManhal,
} from "@src/constants/mapAreas";
import { CViewState } from "@src/types/MapTypes";
import { Point } from "geojson";

export const getGeoData = (
  summaryId: string
): {
  area: CViewState;
  title: string;
  point: Point;
} => {
  switch (summaryId) {
    case "abu-dhabi":
      return {
        area: abuDhabi,
        title: "Abu Dhabi",
        point: {
          type: "Point",
          coordinates: [abuDhabi.longitude, abuDhabi.latitude],
        },
      };
    case "sector-in-al-manhal":
      return {
        area: sectorInAlManhal,
        title: "Sector in Al Manhal",
        point: {
          type: "Point",
          coordinates: [sectorInAlManhal.longitude, sectorInAlManhal.latitude],
        },
      };
    case "police-station":
      return {
        area: policeStation,
        title: "Police Station",
        point: {
          type: "Point",
          coordinates: [policeStation.longitude, policeStation.latitude],
        },
      };
    default:
      return {
        area: abuDhabi,
        title: "Abu Dhabi",
        point: {
          type: "Point",
          coordinates: [abuDhabi.longitude, abuDhabi.latitude],
        },
      };
  }
};
