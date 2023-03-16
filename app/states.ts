import { atom } from "recoil";

export const openFilterState = atom({
  key: "openFilter", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const filterDataState = atom({
  key: "filterData",
  default: {
    type: "all",
    date: { startDate: null, endDate: null },
    user: [],
    solved: "both",
  },
});

export const selectionRangeState = atom({
  key: "textSelectOnEditor",
  default: {
    type: "",
    start: 0,
    end: 0,
    content: "",
  },
});
