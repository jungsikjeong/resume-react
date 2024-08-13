import { atom } from 'recoil';

type menuStateType = true | false;

export const menuState = atom<menuStateType>({
  key: 'MENU_STATE',
  default: false,
});
