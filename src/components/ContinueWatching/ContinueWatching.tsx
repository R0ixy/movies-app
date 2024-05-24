import React from 'react';
import { Image, View } from 'react-native';

import { Icon } from '../Icon';
import { MovieType } from '../../types';
import { MovieDescription, MovieTitle, RowWrap, Wrap } from './StyledComponents.ts';

type ContinueWatchingProps = {
  movie: MovieType,
  onPressCb: () => void,
};

const ContinueWatching = ({ movie, onPressCb }: ContinueWatchingProps) => (
  <Wrap onPress={onPressCb}>
    <RowWrap>
      <Image source={{ uri: movie.image }} style={{ width: 44, height: 56, borderRadius: 8 }}/>
      <View>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieDescription>{movie.description}</MovieDescription>
      </View>
    </RowWrap>
    <Icon name="arrowRight" size={16}/>
  </Wrap>
);

export { ContinueWatching };
