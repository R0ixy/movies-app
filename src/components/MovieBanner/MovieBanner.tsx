import React from 'react';
import { useWindowDimensions } from 'react-native';

import { MovieType } from '../../types';
import {
  GenreLabel,
  GenreText,
  MovieDescription,
  MovieImage,
  MovieName,
  TitleSection,
  Wrapper,
} from './StyledComponents.ts';

type MovieBannerProps = {
  movie: MovieType,
  onPressCb: () => void,
  styleWrapper?: object,
};

const MovieBanner = ({ movie, onPressCb, styleWrapper }: MovieBannerProps) => {
  const { width } = useWindowDimensions();

  return (
    <Wrapper onPress={onPressCb} style={styleWrapper} width={`${width * 0.90}px`}>
      <MovieImage source={{ uri: movie.image }} />
      <GenreLabel>
        <GenreText>{movie.genre}</GenreText>
      </GenreLabel>
      <TitleSection>
        <MovieName>{movie.title}</MovieName>
        <MovieDescription>{movie.description}</MovieDescription>
      </TitleSection>
    </Wrapper>
  );
};

export { MovieBanner };
