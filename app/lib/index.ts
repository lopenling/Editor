import copyToClipboard from "./copyToClipboard";
import { fullSearch } from "./fullSearch.server";
import useFetcherWithPromise from "./useFetcherPromise";
import { useLiveLoader } from "./useLiveLoader";
import getFormattedDate, { timeAgo } from "./getFormatedDate";
import DiffMatchPatch from "diff-match-patch";
import { isMobile, isTablet } from "react-device-detect";
let isSmallScreen = isMobile || isTablet;
import trigerUpdate from "./trigetPusherUpdate.server";
import containTibetanletter from "./containsTIbetanWord";
export {
  copyToClipboard,
  fullSearch,
  useFetcherWithPromise,
  useLiveLoader,
  getFormattedDate,
  timeAgo,
  DiffMatchPatch,
  isSmallScreen,
  trigerUpdate,
  containTibetanletter,
};
