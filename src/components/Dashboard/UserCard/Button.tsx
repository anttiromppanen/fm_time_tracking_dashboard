import { ButtonType } from "../../../Types/types";
import useTimePeriodStore from "../../../Store/store";

interface Props {
  title: ButtonType;
  activeButton: ButtonType;
}

function Button({ title, activeButton }: Props) {
  const { setActiveButton } = useTimePeriodStore();

  return (
    <button
      type="button"
      onClick={() => setActiveButton(title)}
      className={`flex-auto rounded-2xl px-3 py-1 transition-all focus:text-white md:flex-initial lg:flex-auto
      ${activeButton === title && "text-white"}
      ${activeButton !== title && "hover:text-white"}
      `}
    >
      {title}
    </button>
  );
}

export default Button;
