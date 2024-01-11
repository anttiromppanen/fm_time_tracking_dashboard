import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import dotImg from "../../../assets/images/icon-ellipsis.svg";
import useTimePeriodStore from "../../../Store/store";
import { ActivityTypes, ButtonType } from "../../../Types/types";
import Card from "../../Card";

const styleVariants = {
  Work: "bg-userWorkRed",
  Play: "bg-userSoftBlue",
  Study: "bg-userStudyRed",
  Exercise: "bg-userExerciseGreen",
  Social: "bg-userSocialViolet",
  "Self Care": "bg-userSelfCareOrange",
};

type Props = {
  title: ActivityTypes;
  icon: string;
  hours: string;
  totalHours: string;
};

const totalHoursPreviousPeriodText: Record<ButtonType, string> = {
  Daily: "Yesterday",
  Weekly: "Last Week",
  Monthly: "Last Month",
};

function ActivityCard({ title, icon, hours, totalHours }: Props) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const { activeButton } = useTimePeriodStore();
  const baseStyles = "relative z-0 overflow-hidden rounded-t-2xl";

  const handleButtonClick = () => setIsButtonClicked((state) => !state);
  return (
    <Card>
      <div className="relative grid h-full w-full grid-rows-[1fr_2fr] md:grid-rows-[1fr_3fr]">
        <div className={`${baseStyles} ${styleVariants[title]}`}>
          <img src={icon} alt="work" className="absolute -top-3 right-3" />
        </div>
        <div className="relative z-30 -mt-4 grid w-full gap-2 overflow-hidden rounded-2xl bg-userDarkBlue px-10 py-6 hover:cursor-pointer hover:brightness-150">
          <button
            type="button"
            aria-label="Toggle panel"
            onClick={handleButtonClick}
            className="absolute left-0 top-0 h-full w-full rounded-2xl"
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
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  className="text-sm text-userPaleBlue"
                >
                  {totalHoursPreviousPeriodText[activeButton]} - {totalHours}
                </motion.p>
              </div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ActivityCard;
