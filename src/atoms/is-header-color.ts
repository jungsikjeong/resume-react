import { atom } from 'recoil';

export const isHeaderColorstate = atom<boolean>({
  key: 'IS_HEADER_COLOR_STATE',
  default: false,
});
