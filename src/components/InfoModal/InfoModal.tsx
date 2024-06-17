import React from "react";
import { X } from "react-feather";
import { Markup } from "interweave";
import { useMap } from "react-map-gl";
import { AnimatePresence, motion } from "framer-motion";
import { getSummaryData } from "@src/utils/getSummaryData";

const InfoModal = ({
  isOpen,
  toggleModal,
  summaryId,
}: {
  isOpen: boolean;
  summaryId: string;
  toggleModal: (isOpen?: boolean) => void;
}) => {
  const summaryData = getSummaryData(summaryId);
  const { title, summary, charts, layout } = summaryData;
  const { current: map } = useMap();

  React.useEffect(() => {
    if (!map) {
      return;
    }
    map.on("click", () => {
      toggleModal(false);
    });
  }, [map, toggleModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="info-modal"
          initial={{ scale: 0, translateX: "-50%", translateY: "-50%" }}
          animate={{
            scale: 1,
            translateX: "-50%",
            translateY: "-50%",
            transition: { duration: 0.25 },
          }}
          exit={{ scale: 0, transition: { duration: 0.25 } }}
          className="absolute top-[46%] left-1/2 bg-white bg-opacity-40 backdrop-blur-md p-8 w-5/6 h-[85%] rounded-2xl shadow-md shadow-gray-400"
        >
          <div className="flex justify-between items-start mb-8">
            <button
              onClick={() => toggleModal()}
              className="text-gray-400 hover:text-gray-600 hover:ring-gray-800 transition"
            >
              <X size={44} />
            </button>
            <div className="text-5xl font-medium text-gray-800">{title}</div>
          </div>
          <div className="flex flex-col gap-8 h-[calc(100%-5rem)]">
            <div className="flex gap-4">
              <div style={{ flex: layout.flexLeft }}>{charts.sideChart}</div>
              <div
                className="text-[1.65rem] leading-snug text-gray-800 text-right"
                style={{ flex: layout.flexRight }}
              >
                <Markup content={summary} />
              </div>
            </div>
            <div className="flex flex-grow">{charts.bottomChart}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;
