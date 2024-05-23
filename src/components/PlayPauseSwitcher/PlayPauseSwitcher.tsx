import React from "react";
import { TouchableOpacity, View } from "react-native";

import { Icon } from "../Icon";

type PlayPauseSwitcherProps = {
  paused: boolean,
  onPressCb: () => void,
}

const PlayPauseSwitcher = ({ paused, onPressCb }: PlayPauseSwitcherProps) => (
  <TouchableOpacity onPress={onPressCb}>
    {paused ? <Icon name="play" size={24} /> : <Icon name="pause" size={24} />}
  </TouchableOpacity>
);

export { PlayPauseSwitcher };
