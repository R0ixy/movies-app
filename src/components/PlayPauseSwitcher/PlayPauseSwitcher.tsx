import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Icon } from '../Icon';

type PlayPauseSwitcherProps = {
  paused: boolean,
  onPressCb: () => void,
  styleWrapper?: object,
};

const PlayPauseSwitcher = ({ paused, onPressCb, styleWrapper }: PlayPauseSwitcherProps) => (
  <TouchableOpacity onPress={onPressCb} style={styleWrapper}>
    {paused ? <Icon name="play" size={24} /> : <Icon name="pause" size={24} />}
  </TouchableOpacity>
);

export { PlayPauseSwitcher };
