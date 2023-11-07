import copyToClipboard from './copyToClipboard';
import { fullSearch } from './fullSearch.server';
import getFormattedDate, { timeAgo } from './getFormatedDate';
import DiffMatchPatch from 'diff-match-patch';
import { isMobile, isTablet } from 'react-device-detect';
let isSmallScreen = isMobile || isTablet;
import containTibetanletter from './containsTIbetanWord';
export { copyToClipboard, fullSearch, getFormattedDate, timeAgo, DiffMatchPatch, isSmallScreen, containTibetanletter };
