import { atom, selector } from "recoil";
//theme
export const theme = atom({
  key: "theme-tailwind",
  default: false,
});

//textName

export const textName = atom({
  key: "textName",
  default: "",
});

//editorOptios

export const showSearchPanelState = atom({
  key: "showSearch",
  default: false,
});

export const showFontSizeState = atom({
  key: "showfontSize",
  default: false,
});
//posts

export const postslist = atom({
  key: "postList",
  default: [],
});
//joyride
export const openJoyride = atom({
  key: "joyride",
  default: false,
});
//threadSelection
export const openSuggestionState = atom({
  key: "openSuggestion",
  default: false,
});

export const selectedSuggestionThread = atom({
  key: "selectedSuggestionThread",
  default: {
    id: null,
  },
});
export const selectedPostThread = atom({
  key: "selectedPostThread",
  default: {
    id: null,
  },
});
//share State

export const shareState = atom({
  key: "sharePost",
  default: false,
});

//filter related states
export const openFilterState = atom({
  key: "openFilter", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
export const showLatest = atom({
  key: "latestFilter",
  default: true,
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

export const filteredPost = selector({
  key: "FilteredPost",
  get: ({ get }) => {
    const filter = get(filterDataState);
    let posts = [...get(postslist)];
    const isLatest = get(showLatest);

    if (filter.type && filter.type !== "all")
      posts = posts.filter((l) => {
        return l.type === filter.type;
      });
    if (filter.user?.length)
      posts = posts.filter((l) => {
        return filter.user?.includes(l.creatorUser.username);
      });
    if (filter.date?.startDate)
      posts = posts.filter((l) => {
        return (
          new Date(l.created_at).getTime() >
            new Date(filter.date.startDate).getTime() &&
          new Date(l.created_at).getTime() <
            new Date(filter.date.endDate).getTime()
        );
      });
    if (filter.solved && filter.solved !== "both")
      posts = posts.filter((l) => {
        return l.isSolved === (filter.solved === "solved");
      });
    if (posts.length > 0) {
      // posts = posts.sort((a, b) => {
      //   if (isLatest) return new Date(b.created_at) - new Date(a.created_at);
      //   else return new Date(a.created_at) - new Date(b.created_at);
      // });
      posts.sort(function (a, b) {
        let c: Date = new Date(a.created_at);
        let d: Date = new Date(b.created_at);
        return !isLatest ? c - d : d - c;
      });
    }
    return posts;
  },
});
//text selection

export const selectedTextOnEditor = atom({
  key: "selectionSection",
  default: {
    type: "",
    start: 0,
    end: 0,
    content: "",
  },
});
