import React from 'react';

import Locked from '../../assets/icons/locked.svg';
import Search from '../../assets/icons/search.svg';

type IconPropsType = {
  size?: number,
  name: string,
  height?: number,
  width?: number,
}

const icons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  // @ts-ignore
  locked: Locked,
  search: Search,
}

const Icon = ({ size, name, height, width, ...rest }: IconPropsType) => {
  const SvgIcon = icons[name];

  if (!name) return <></>;

  return <SvgIcon height={height || size} width={width || size} {...rest} />;

};

export { Icon };
