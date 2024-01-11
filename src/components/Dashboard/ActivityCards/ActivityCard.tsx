import { useState } from "react";
import { Line, LineChart, Tooltip, TooltipProps } from "recharts";
import useTimePeriodStore from "../../../Store/store";
import { ActivityTypes } from "../../../Types/types";
import Card from "../../Card";
import BottomDefault from "./BottomDefault";

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
  data: {
    week: string;
    hours: number;
  }[];
};

function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps<number, string>) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black p-2 text-2xl">
        <p className="label">{`Week ${label + 1}`}</p>
        <p>{payload[0].value} hours</p>
      </div>
    );
  }

  return null;
}

function ActivityCard({ title, icon, hours, totalHours, data }: Props) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const { activeButton } = useTimePeriodStore();
  const baseStyles = "relative z-0 overflow-hidden rounded-t-2xl";

  const handleButtonClick = () => setIsButtonClicked((state) => !state);
  return (
    <Card>
      <div
        className={`
        relative grid h-full min-h-[160px] w-full grid-rows-[1fr_2fr]
        md:min-h-[241px] md:min-w-[234px] md:grid-rows-[1fr_3fr]
        ${isButtonClicked && "!md:grid-rows-[1fr_8fr] !grid-rows-[1fr_4fr]"}`}
      >
        <div className={`${baseStyles} ${styleVariants[title]}`}>
          <img src={icon} alt="work" className="absolute -top-3 right-3" />
        </div>
        {!isButtonClicked ? (
          <BottomDefault
            handleButtonClick={handleButtonClick}
            title={title}
            hours={hours}
            activeButton={activeButton}
            totalHours={totalHours}
          />
        ) : (
          <div className="relative z-30 -mt-2 flex flex-row-reverse items-center justify-around rounded-t-2xl bg-userDarkBlue hover:cursor-pointer hover:brightness-150 md:flex-col">
            <button
              type="button"
              aria-label="Toggle panel"
              onClick={handleButtonClick}
              className="
              absolute left-0 top-0 h-full w-full rounded-2xl outline-white 
              focus-visible:outline focus-visible:outline-2"
            />
            <LineChart width={200} height={100} data={data} className="p-1">
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="hours"
                stroke="#8884d8"
                strokeWidth={6}
              />
            </LineChart>
            <h1 className="text-2xl">{title}</h1>
          </div>
        )}
      </div>
    </Card>
  );
}

export default ActivityCard;
