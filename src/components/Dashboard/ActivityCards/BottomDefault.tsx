import { AnimatePresence, motion } from "framer-motion";
import dotImg from "../../../assets/images/icon-ellipsis.svg";
import { ActivityTypes, ButtonType } from "../../../Types/types";

const totalHoursPreviousPeriodText: Record<ButtonType, string> = {
  Daily: "Yesterday",
  Weekly: "Last Week",
  Monthly: "Last Month",
};

type Props = {
  title: ActivityTypes;
  hours: string;
  totalHours: string;
  activeButton: ButtonType;
  handleButtonClick: () => void;
};

export default function BottomDefault({
  handleButtonClick,
  title,
  hours,
  activeButton,
  totalHours,
}: Props) {
  return (
    <div
      className="
          relative z-30 -mt-4 grid gap-2 rounded-2xl bg-userDarkBlue px-10 py-6 
          hover:cursor-pointer hover:brightness-150"
    >
      <button
        type="button"
        aria-label="Toggle panel"
        onClick={handleButtonClick}
        className="
            absolute left-0 top-0 h-full w-full rounded-2xl outline-white 
            focus-visible:outline focus-visible:outline-2"
      />
      <div className="flex items-center justify-between">
        <h1 className="text-userCardTitleSize font-medium md:text-sm">
          {title}
        </h1>
        <button type="button">
          <img src={dotImg} alt="" className="p-2 hover:brightness-125" />
        </button>
      </div>
      <div className="flex items-center justify-between md:mt-6 md:flex-col md:items-start md:gap-y-4">
        <h2 className="text-4xl font-light md:text-6xl">{hours}</h2>
        <AnimatePresence>
          <div className="overflow-hidden">
            <motion.p
              key={activeButton}
              initial={{
                y: -10,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: 10,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="text-sm text-userPaleBlue"
            >
              {totalHoursPreviousPeriodText[activeButton]} - {totalHours}
            </motion.p>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}
