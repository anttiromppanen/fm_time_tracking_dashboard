import { create } from "zustand";
import { ButtonType } from "../Types/types";

interface TimePeriodStore {
  activeButton: ButtonType;
  setActiveButton: (buttonType: ButtonType) => void;
}

const useTimePeriodStore = create<TimePeriodStore>((set) => ({
  activeButton: "Daily",
  setActiveButton: (buttonType: ButtonType) =>
    set({ activeButton: buttonType }),
}));

export default useTimePeriodStore;
