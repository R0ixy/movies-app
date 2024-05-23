import React from 'react';
import { Image, View } from 'react-native';

import { Icon } from '../Icon';

import { MovieDescription, MovieTitle, RowWrap, Wrap } from './StyledComponents.ts';

const ContinueWatching = ({  }) => {

  return (
    <Wrap>
      <RowWrap>
        <Image source={require('../../assets/images/cover-1.1.png')} style={{ width: 44, height: 56, borderRadius: 8 }} />
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
