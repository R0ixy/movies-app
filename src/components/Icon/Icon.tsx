import React from 'react';

import Locked from '../../assets/icons/locked.svg';
import Search from '../../assets/icons/search.svg';
import Close from '../../assets/icons/close.svg';
import Play from '../../assets/icons/play.svg';
import Pause from '../../assets/icons/pause.svg';

type IconPropsType = {
  size?: number,
  name: string,
  height?: number,
  width?: number,
}

const icons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  // @ts-ignore
  locked: Locked,
  // @ts-ignore
  search: Search,
  // @ts-ignore
  close: Close,
  // @ts-ignore
  play: Play,
  // @ts-ignore
  pause: Pause,
}

const Icon = ({ size, name, height, width, ...rest }: IconPropsType) => {
  const SvgIcon = icons[name];

  if (!name) return <></>;

  return <SvgIcon height={height || size} width={width || size} {...rest} />;

};

export { Icon };
