import { CandlestickChart, DollarSign, GroupIcon, User } from "lucide-react";
import { HomeCard } from "./HomeCard";

const Home = () => {
  return (
    <div className="w-full h-screen bg-zinc-800 px-10 text-white">
      <div className="w-full px-6 py-6 mx-auto">
        <div className="flex flex-wrap -mx-3">
          {homeCards.map((card) => (
            <HomeCard key={card.title} {...card} />
          ))}
        </div>
      </div>
      <div className="w-full px-6 py-6 mx-auto">
        <div className="flex flex-wrap -mx-3">
          {homeCards.map((card) => (
            <HomeCard key={card.title} {...card} />
          ))}
        </div>
      </div>

      <div className="w-full px-6 py-6 mx-auto">
        <div className="flex flex-wrap -mx-3">
          {homeCards.map((card) => (
            <HomeCard key={card.title} {...card} />
          ))}
        </div>
      </div>

      <div className="w-full px-6 py-6 mx-auto">
        <div className="flex flex-wrap -mx-3">
          {homeCards.map((card) => (
            <HomeCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

const homeCards = [
  {
    title: "Today's Money",
    value: "$53,000",
    percentage: "+55%",
    color: "red",
    icon: <DollarSign />,
  },
  {
    title: "Today's Users",
    value: "2,300",
    percentage: "+3%",
    color: "blue",
    icon: <User />,
  },
  {
    title: "New Clients",
    value: "+3,462",
    percentage: "-2%",
    color: "green",
    icon: <GroupIcon />,
  },
  {
    title: "Sales",
    value: "$103,430",
    percentage: "+5%",
    color: "yellow",
    icon: <CandlestickChart />,
  },
];

export default Home;
