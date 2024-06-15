export const getSummaryData = (summaryId: string) => {
  switch (summaryId) {
    case "abu-dhabi":
      return {
        title: "Abu Dhabi",
      };
    case "sector-in-al-manhal":
      return {
        title: "Sector in Al Manhal",
      };
    case "police-station":
      return {
        title: "Police Station",
      };
    default:
      return {
        title: "Abu Dhabi",
      };
  }
};
