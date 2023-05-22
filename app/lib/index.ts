import copyToClipboard from "./copyToClipboard";
import { fullSearch } from "./fullSearch.server";
import useFetcherWithPromise from "./useFetcherPromise";
import { useLiveLoader } from "./useLiveLoader";
import getFormattedDate, { timeAgo } from "./getFormatedDate";
import DiffMatchPatch from "diff-match-patch";
import { isMobile, isTablet } from "react-device-detect";
let isSmallScreen = isMobile || isTablet;
export {
  copyToClipboard,
  fullSearch,
  useFetcherWithPromise,
  useLiveLoader,
  getFormattedDate,
  timeAgo,
  DiffMatchPatch,
  isSmallScreen,
};
