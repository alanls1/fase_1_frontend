import { create } from "zustand";

type state = {
  isVisible: boolean;
  message: string;
};

type action = {
  setIsVisible: (value: state["isVisible"]) => void;
  setMessage: (value: state["message"]) => void;
};

const useFeedback = create<state & action>((set) => ({
  isVisible: false,
  message: "",

  //actions
  setIsVisible: (value) => set(() => ({ isVisible: value })),
  setMessage: (value) => set(() => ({ message: value })),
}));

export default useFeedback;
