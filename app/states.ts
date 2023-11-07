import { atom } from 'recoil';
import { FilterType } from './model/type';

//permission

export const audioPermission = atom({
  key: 'audioPermission',
  default: false,
});

export const ImageState = atom({
  default: { show: true, url: '', isPortrait: false },
  key: 'showImage',
});

//textName

export const textInfo = atom({
  key: 'textName',
  default: {
    name: '',
    id: '',
  },
});

//share State

export const shareState = atom({
  key: 'sharePost',
  default: false,
});

//filter related states
export const openFilterState = atom({
  key: 'openFilter', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
export const showLatest = atom<boolean>({
  key: 'latestFilter',
  default: true,
});
export const filterDataState = atom<FilterType>({
  key: 'filterData',
  default: {
    type: 'all',
    date: { startDate: null, endDate: null },
    user: [],
    solved: 'both',
  },
});

//text selection

export const selectedTextOnEditor = atom({
  key: 'selectionSection',
  default: {
    type: '',
    start: 0,
    end: 0,
    content: '',
  },
});
