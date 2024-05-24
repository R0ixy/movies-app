import React from 'react';

import Locked from '../../assets/icons/locked.svg';
import Search from '../../assets/icons/search.svg';
import Close from '../../assets/icons/close.svg';
import Play from '../../assets/icons/play.svg';
import Pause from '../../assets/icons/pause.svg';
import ArrowRight from '../../assets/icons/arrow-right.svg';

type IconName = 'locked' | 'search' | 'close' | 'play' | 'pause' | 'arrowRight';

type IconPropsType = {
  size?: number,
  name: IconName,
  height?: number,
  width?: number,
};

const icons: { [key in IconName]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  locked: Locked,
  search: Search,
  close: Close,
  play: Play,
  pause: Pause,
  arrowRight: ArrowRight,
};

const Icon = ({ size, name, height, width, ...rest }: IconPropsType) => {
  const SvgIcon = icons[name];

  if (!name) return <></>;

  return <SvgIcon height={height || size} width={width || size} {...rest} />;

};

export { Icon };
