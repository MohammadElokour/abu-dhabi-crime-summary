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
  pointsOfInterest?: {
    id: string;
    point: Point;
    type: string;
    time?: string;
  }[];
} => {
  switch (summaryId) {
    case "abu-dhabi":
      return {
        area: abuDhabi,
        title: "أبو ظبي",
        point: {
          type: "Point",
          coordinates: [abuDhabi.longitude, abuDhabi.latitude],
        },
        pointsOfInterest: [
          {
            id: "criminal-1",
            point: {
              type: "Point",
              coordinates: [55.70899666536416, 24.21103227070148],
            },
            type: "drugs",
            time: "3:00PM",
          },
          {
            id: "criminal-2",
            point: {
              type: "Point",
              coordinates: [54.92622078645791, 23.548009060712616],
            },
            type: "drugs",
            time: "5:00PM",
          },
          {
            id: "criminal-3",
            point: {
              type: "Point",
              coordinates: [54.30823982942666, 22.947401058614098],
            },
            type: "drugs",
            time: "2:00AM",
          },
          {
            id: "criminal-4",
            point: {
              type: "Point",
              coordinates: [53.41285408723916, 22.997976123533984],
            },
            type: "drugs",
            time: "1:00AM",
          },
          {
            id: "criminal-5",
            point: {
              type: "Point",
              coordinates: [52.61359871614541, 24.043087207002724],
            },
            type: "drugs",
            time: "4:00AM",
          },
        ],
      };
    case "sector-in-al-manhal":
      return {
        area: sectorInAlManhal,
        title: "قطاع في المنهل",
        point: {
          type: "Point",
          coordinates: [sectorInAlManhal.longitude, sectorInAlManhal.latitude],
        },
        pointsOfInterest: [
          {
            id: "steeling-1",
            point: {
              type: "Point",
              coordinates: [54.3677923606792, 24.45710802783229],
            },
            type: "حادثة سرقة",
            time: "3:00PM",
          },
          {
            id: "steeling-2",
            point: {
              type: "Point",
              coordinates: [54.37045311202198, 24.459295627162984],
            },
            type: "حادثة سرقة",
            time: "5:00PM",
          },
          {
            id: "steeling-3",
            point: {
              type: "Point",
              coordinates: [54.36654781569629, 24.46343633616228],
            },
            type: "حادثة سرقة",
            time: "2:00AM",
          },
          {
            id: "steeling-4",
            point: {
              type: "Point",
              coordinates: [54.36521744002491, 24.459842521059503],
            },
            type: "حادثة سرقة",
            time: "1:00AM",
          },
        ],
      };
    case "police-station":
      return {
        area: policeStation,
        title: "مركز شرطة المدينة الشامل",
        point: {
          type: "Point",
          coordinates: [policeStation.longitude, policeStation.latitude],
        },
        pointsOfInterest: [
          {
            id: "report-1",
            point: {
              type: "Point",
              coordinates: [55.9486903564129, 25.761599997721977],
            },
            type: "الإبلاغ عن جريمة",
            time: "3:00PM",
          },
          {
            id: "report-2",
            point: {
              type: "Point",
              coordinates: [55.94182390133477, 25.73438728088847],
            },
            type: "الإبلاغ عن جريمة",
            time: "5:00PM",
          },
          {
            id: "report-3",
            point: {
              type: "Point",
              coordinates: [55.92105419098602, 25.726499103585933],
            },
            type: "الإبلاغ عن جريمة",
            time: "1:30PM",
          },
          {
            id: "report-4",
            point: {
              type: "Point",
              coordinates: [55.899682349555356, 25.746176137277313],
            },
            type: "الإبلاغ عن جريمة",
            time: "11:00AM",
          },
        ],
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
