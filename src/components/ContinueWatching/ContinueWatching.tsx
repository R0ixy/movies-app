import React from 'react';
import { Image, View } from 'react-native';

import { Icon } from '../Icon';
import { MovieDescription, MovieTitle, RowWrap, Wrap } from './StyledComponents.ts';

const ContinueWatching = () => {

  const movie = {
    image: 'https://firebasestorage.googleapis.com/v0/b/test-project-59f57.appspot.com/o/cover-1.1.png?alt=media&token=6ccfa22c-c565-41d9-a0f2-92cb06b73827',
  };

  return (
    <Wrap>
      <RowWrap>
        <Image source={{ uri: movie.image }} style={{ width: 44, height: 56, borderRadius: 8 }} />
        <View>
          <MovieTitle>Boss With Benefits</MovieTitle>
          <MovieDescription>Kelly Nite</MovieDescription>
        </View>
      </RowWrap>
      <Icon name="arrowRight" size={16} />
    </Wrap>
  );
};

export { ContinueWatching };
