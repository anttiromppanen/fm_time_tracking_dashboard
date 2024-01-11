import Button from "./Button";
import useTimePeriodStore from "../../../Store/store";

function Bottom() {
  const { activeButton } = useTimePeriodStore();

  return (
    <div
      className="
      flex flex-[1_1_30%] items-center justify-center gap-2 rounded-2xl bg-userDarkBlue px-4 py-2 text-userDesaturatedBlue 
      md:mt-6 md:flex-col md:items-start md:justify-start lg:mt-0 lg:justify-center"
    >
      <Button title="Daily" activeButton={activeButton} />
      <Button title="Weekly" activeButton={activeButton} />
      <Button title="Monthly" activeButton={activeButton} />
    </div>
  );
}

export default Bottom;
