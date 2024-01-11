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
  data: {
    week: string;
    hours: number;
  }[];
}

const activities: Activity[] = [
  {
    title: "Work",
    hours: "32hrs",
    totalHours: "36hrs",
    icon: workIcon,
    data: [
      {
        week: "Week 1",
        hours: 32,
      },
      {
        week: "Week 2",
        hours: 28,
      },
      {
        week: "Week 3",
        hours: 34,
      },
      {
        week: "Week 4",
        hours: 32,
      },
      {
        week: "Week 5",
        hours: 36,
      },
      {
        week: "Week 6",
        hours: 40,
      },
    ],
  },
  {
    title: "Play",
    hours: "10hrs",
    totalHours: "8hrs",
    icon: playIcon,
    data: [
      {
        week: "Week 1",
        hours: 10,
      },
      {
        week: "Week 2",
        hours: 8,
      },
      {
        week: "Week 3",
        hours: 12,
      },
      {
        week: "Week 4",
        hours: 8,
      },
      {
        week: "Week 5",
        hours: 10,
      },
      {
        week: "Week 6",
        hours: 12,
      },
    ],
  },
  {
    title: "Study",
    hours: "4hrs",
    totalHours: "7hrs",
    icon: studyIcon,
    data: [
      {
        week: "Week 1",
        hours: 4,
      },
      {
        week: "Week 2",
        hours: 6,
      },
      {
        week: "Week 3",
        hours: 5,
      },
      {
        week: "Week 4",
        hours: 5,
      },
      {
        week: "Week 5",
        hours: 6,
      },
      {
        week: "Week 6",
        hours: 7,
      },
    ],
  },
  {
    title: "Exercise",
    hours: "4hrs",
    totalHours: "5hrs",
    icon: exerciseIcon,
    data: [
      {
        week: "Week 1",
        hours: 4,
      },
      {
        week: "Week 2",
        hours: 3,
      },
      {
        week: "Week 3",
        hours: 5,
      },
      {
        week: "Week 4",
        hours: 4,
      },
      {
        week: "Week 5",
        hours: 4,
      },
      {
        week: "Week 6",
        hours: 5,
      },
    ],
  },
  {
    title: "Social",
    hours: "5hrs",
    totalHours: "10hrs",
    icon: socialIcon,
    data: [
      {
        week: "Week 1",
        hours: 5,
      },
      {
        week: "Week 2",
        hours: 8,
      },
      {
        week: "Week 3",
        hours: 6,
      },
      {
        week: "Week 4",
        hours: 6,
      },
      {
        week: "Week 5",
        hours: 8,
      },
      {
        week: "Week 6",
        hours: 10,
      },
    ],
  },
  {
    title: "Self Care",
    hours: "2hrs",
    totalHours: "2hrs",
    icon: selfCareIcon,
    data: [
      {
        week: "Week 1",
        hours: 2,
      },
      {
        week: "Week 2",
        hours: 15,
      },
      {
        week: "Week 3",
        hours: 0,
      },
      {
        week: "Week 4",
        hours: 6,
      },
      {
        week: "Week 5",
        hours: 2,
      },
      {
        week: "Week 6",
        hours: 40,
      },
    ],
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
          data={x.data}
        />
      ))}
    </div>
  );
}

export default ActivityCards;
