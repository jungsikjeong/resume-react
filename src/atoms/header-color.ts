import { atom } from 'recoil';

export const headerColorstate = atom<boolean>({
  key: 'HEADER_COLOR_STATE',
  default: false,
});
