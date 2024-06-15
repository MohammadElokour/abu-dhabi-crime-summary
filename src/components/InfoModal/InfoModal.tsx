import { getSummaryData } from "@src/utils/getSummaryData";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "react-feather";

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
  const { title } = summaryData;
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
          className="absolute top-[48%] left-1/2 bg-white bg-opacity-50 backdrop-blur-md p-8 w-1/2 h-4/5 rounded-2xl shadow-md shadow-gray-400"
        >
          <div className="flex justify-between items-center">
            <div className="text-3xl font-medium">{title}</div>
            <button
              onClick={() => toggleModal()}
              className="text-gray-400 hover:text-gray-500"
            >
              <X size={32} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;
