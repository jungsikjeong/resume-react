interface IconProps {
  size?: string;
  color?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
  width?: string;
  height?: string;
}

const ListIcon: React.FC<IconProps> = ({
  size = '16',
  color = 'rgba(55, 53, 47, 0.45)',
}) => {
  return (
    <svg width={size} height={size} viewBox='0 0 14 14'>
      <path
        d='M4,3 C4,2.447715 4.447715,2 5,2 L12,2 C12.5523,2 13,2.447716 13,3 C13,3.55228 12.5523,4 12,4 L5,4 C4.447715,4 4,3.55228 4,3 Z M4,7 C4,6.447715 4.447715,6 5,6 L12,6 C12.5523,6 13,6.447716 13,7 C13,7.55228 12.5523,8 12,8 L5,8 C4.447715,8 4,7.55228 4,7 Z M4,11 C4,10.447715 4.447715,10 5,10 L12,10 C12.5523,10 13,10.447716 13,11 C13,11.55228 12.5523,12 12,12 L5,12 C4.447715,12 4,11.55228 4,11 Z M2,4 C1.44771525,4 1,3.55228475 1,3 C1,2.44771525 1.44771525,2 2,2 C2.55228475,2 3,2.44771525 3,3 C3,3.55228475 2.55228475,4 2,4 Z M2,8 C1.44771525,8 1,7.55228475 1,7 C1,6.44771525 1.44771525,6 2,6 C2.55228475,6 3,6.44771525 3,7 C3,7.55228475 2.55228475,8 2,8 Z M2,12 C1.44771525,12 1,11.5522847 1,11 C1,10.4477153 1.44771525,10 2,10 C2.55228475,10 3,10.4477153 3,11 C3,11.5522847 2.55228475,12 2,12 Z'
        fill={color}
      ></path>
    </svg>
  );
};
const GraphIcon: React.FC<IconProps> = ({
  size = '16',
  color = 'rgba(55, 53, 47, 0.45)',
}) => {
  return (
    <svg width={size} height={size} viewBox='0 0 14 14'>
      <path
        d='M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z'
        fill={color}
      ></path>
    </svg>
  );
};
const LightBtnIcon: React.FC<IconProps> = ({
  size = '16',
  color = 'rgba(55, 53, 47, 0.45)',
}) => {
  return (
    <svg
      width={size}
      height={size}
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='5'></circle>
      <line x1='12' y1='1' x2='12' y2='3'></line>
      <line x1='12' y1='21' x2='12' y2='23'></line>
      <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
      <line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
      <line x1='1' y1='12' x2='3' y2='12'></line>
      <line x1='21' y1='12' x2='23' y2='12'></line>
      <line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
      <line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
    </svg>
  );
};

const DarkBtnIcon: React.FC<IconProps> = ({
  size = '16',
  color = 'rgba(55, 53, 47, 0.45)',
}) => {
  return (
    <svg
      stroke='currentColor'
      fill={color}
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      width={size}
      height={size}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
    </svg>
  );
};

const HeartIcon: React.FC<IconProps> = ({
  width = '19px',
  height = '16.5px',
  color = 'tomato',
}) => {
  return (
    <i data-svg='https://studio-jt.co.kr/wp-content/themes/studio_jt/images/icon/icon-blue-heart.svg'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        version='1.1'
        x='0px'
        y='0px'
        width={width}
        height={height}
        viewBox='0 0 19 16.5'
        enableBackground='new 0 0 19 16.5'
        xmlSpace='preserve'
      >
        <title> LOVE </title>
        <path
          fill={color}
          d='M15.7,3.3c-0.6-0.6-1.3-1-2.1-1c-1.2,0-2.2,0.6-2.8,1.7c-0.2,0.5-0.7,0.8-1.2,0.7c-0.5,0-1-0.3-1.2-0.8  C7.8,2.8,6.8,2.1,5.6,2.1c0,0-0.1,0-0.1,0C4,2.1,2.6,3.4,2.5,5l0,0.3c-0.1,1-0.1,6.3,6.5,8.6c0.2,0.1,0.4,0.1,0.6,0  c6.9-1.9,6.9-8,6.9-8.3v0C16.5,4.7,16.2,3.9,15.7,3.3z'
        ></path>
        <path
          fill='#020202'
          d='M17.1,1.9c-0.9-1-2.2-1.6-3.5-1.6c-1.5,0-3,0.7-4,1.9C8.7,0.8,7.3,0,5.7,0C3-0.1,0.7,2.1,0.5,5l0,0.2  C0.5,6,0.2,13.1,8.4,15.8C8.7,15.9,9,16,9.3,16c0.3,0,0.5,0,0.8-0.1c8.1-2.2,8.4-9.6,8.4-10.3C18.5,4.2,18,2.9,17.1,1.9z M9,13.9  c-6.6-2.3-6.6-7.5-6.5-8.6l0-0.3c0.1-1.7,1.4-3,3.1-3c0,0,0.1,0,0.1,0c1.2,0,2.2,0.7,2.7,1.8C8.6,4.4,9,4.7,9.5,4.7  c0.5,0,1-0.3,1.2-0.7c0.6-1.1,1.6-1.7,2.8-1.7c0.8,0,1.6,0.4,2.1,1s0.9,1.4,0.8,2.3v0c0,0.3,0,6.4-6.9,8.3C9.4,14,9.2,13.9,9,13.9z'
        ></path>
      </svg>
    </i>
  );
};

const CustomIcons = {
  ListIcon,
  GraphIcon,
  LightBtnIcon,
  DarkBtnIcon,
  HeartIcon,
};

export default CustomIcons;
