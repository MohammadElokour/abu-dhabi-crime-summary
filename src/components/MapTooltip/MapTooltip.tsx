import { getTooltipData } from "@src/utils/getTooltipData";
import { AnimatePresence, motion } from "framer-motion";

const MapTooltip = ({
  id,
  open,
  position,
}: {
  id: string;
  open: boolean;
  position: { x: number; y: number };
}) => {
  const { x, y } = position;
  const { title, description, time, coordinates } = getTooltipData(id);
  const [longitude, latitude] = coordinates;
  const longFormatted = `${longitude.toString().slice(0, 2)}º${longitude.toString().slice(3, 8)}`;
  const latFormatted = `${latitude.toString().slice(0, 2)}º${latitude.toString().slice(3, 8)}`;

  const imgSrc = id.split("-")[0];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key={id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.3 },
          }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          id={id}
          style={{
            position: "absolute",
            top: `${y - 250}px`,
            left: `${x - 200}px`,
          }}
          className={`pointer-events-none absolute z-10 p-8 w-[500px] h-[200px] gap-2 bg-white bg-opacity-60 backdrop-blur-md rounded-2xl shadow-md shadow-gray-400`}
        >
          <motion.div
            initial={{ scale: 0, translateY: 100, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              translateY: 0,
              transition: { duration: 0.3, delay: 0.1 },
            }}
            className="flex flex-row-reverse child:flex-1 items-center align-center justify-between h-full gap-3"
          >
            <div className="text-right">
              <p className="text-gray-700 font-bold text-xl mb-1">{title}</p>
              <p className="text-gray-700 text-md">{description}</p>
            </div>
            <img
              className="size-32 rounded-full"
              src={`/images/animated-gifs/${imgSrc}.gif`}
              alt={imgSrc}
            />
            <div className="text-right">
              <p className="text-gray-700 font-bold text-lg mb-1">
                الموقع والوقت
              </p>
              <p className="text-gray-700 font-semibold text-md">{time}</p>
              <p className="text-gray-700 font-semibold text-xs">
                {latFormatted}, {longFormatted}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MapTooltip;
