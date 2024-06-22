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
          className="absolute top-[45%] sm:top-[46%] left-1/2 bg-white bg-opacity-40 backdrop-blur-md p-4 sm:p-8 w-[95%] sm:w-5/6 h-[88%] sm:h-[85%] rounded-2xl shadow-md shadow-gray-400"
        >
          <div className="flex justify-between items-start mb-8">
            <button
              onClick={() => toggleModal()}
              className="text-gray-400 hover:text-gray-600 hover:ring-gray-800 transition"
            >
              <X className="size-10 sm:size-12" />
            </button>
            <div className="text-4xl sm:text-5xl font-medium text-gray-800">
              {title}
            </div>
          </div>
          <div className="flex flex-col gap-8 h-[calc(100%-5rem)]">
            <div
              className={`flex flex-col-reverse sm:flex-row gap-4 flex-1 ${!charts.bottomChart && "h-auto sm:h-full"} justify-end`}
            >
              {charts.sideChart && (
                <div
                  className="-translate-x-5 sm:translate-x-0"
                  style={{ flex: layout.flexLeft }}
                >
                  {charts.sideChart}
                </div>
              )}
              <motion.div
                initial={{
                  translateY: 100,
                  opacity: 0,
                }}
                animate={{
                  translateY: 0,
                  opacity: 1,
                  transition: { duration: 1, delay: 0.25 },
                }}
                className="text-md sm:text-[1.65rem] leading-snug text-gray-800 text-right w-full"
                style={{ flex: layout.flexRight }}
              >
                <Markup content={summary} />
              </motion.div>
            </div>
            {charts.bottomChart && (
              <div
                className={`flex ${charts.sideChart ? "flex-[1.5]" : "h-full"}`}
              >
                <motion.div
                  initial={{ translateY: 1500, scale: 0 }}
                  animate={{
                    translateY: 0,
                    scale: 1,
                    transition: { duration: 1, delay: 0.5 },
                  }}
                  className="flex flex-grow"
                >
                  {charts.bottomChart}
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;
