import workIcon from "../../../assets/images/icon-work.svg";
import playIcon from "../../../assets/images/icon-play.svg";
import studyIcon from "../../../assets/images/icon-study.svg";
import exerciseIcon from "../../../assets/images/icon-exercise.svg";
import socialIcon from "../../../assets/images/icon-social.svg";
import selfCareIcon from "../../../assets/images/icon-self-care.svg";
import { ActivityTypes } from "../../../Types/types";
import ActivityCard from "./ActivityCard";

interface Activity {
  title: ActivityTypes;
  hours: string;
  totalHours: string;
  icon: string;
}

const activities: Activity[] = [
  {
    title: "Work",
    hours: "32hrs",
    totalHours: "36hrs",
    icon: workIcon,
  },
  {
    title: "Play",
    hours: "10hrs",
    totalHours: "8hrs",
    icon: playIcon,
  },
  {
    title: "Study",
    hours: "4hrs",
    totalHours: "7hrs",
    icon: studyIcon,
  },
  {
    title: "Exercise",
    hours: "4hrs",
    totalHours: "5hrs",
    icon: exerciseIcon,
  },
  {
    title: "Social",
    hours: "5hrs",
    totalHours: "10hrs",
    icon: socialIcon,
  },
  {
    title: "Self Care",
    hours: "2hrs",
    totalHours: "2hrs",
    icon: selfCareIcon,
  },
];

function ActivityCards() {
  return (
    <div className="grid w-full gap-6 md:grid-cols-[1fr_1fr] md:gap-8 lg:grid-cols-[1fr_1fr_1fr]">
      {activities.map((x) => (
        <ActivityCard
          key={x.title}
          title={x.title}
          hours={x.hours}
          totalHours={x.totalHours}
          icon={x.icon}
        />
      ))}
    </div>
  );
}

export default ActivityCards;
