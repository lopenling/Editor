import copyToClipboard from './copyToClipboard';
import { fullSearch } from './fullSearch.server';
import getFormattedDate, { timeAgo } from './getFormatedDate';
import DiffMatchPatch from 'diff-match-patch';
import { isMobile, isTablet } from 'react-device-detect';
let isSmallScreen = isMobile || isTablet;
import trigerUpdate from './trigetPusherUpdate.server';
import { initializeTribute } from './tribute.client';
import containTibetanletter from './containsTIbetanWord';
export {
  copyToClipboard,
  fullSearch,
  getFormattedDate,
  timeAgo,
  DiffMatchPatch,
  isSmallScreen,
  trigerUpdate,
  containTibetanletter,
  initializeTribute,
};
