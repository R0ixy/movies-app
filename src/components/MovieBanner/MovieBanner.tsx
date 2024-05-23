import React from 'react';
import { useWindowDimensions } from 'react-native';

import {
  GenreLabel,
  GenreText,
  MovieDescription,
  MovieImage,
  MovieName,
  TitleSection,
  Wrapper
} from './StyledComponents.ts';

type MovieBannerProps = {
  movie: {
    id: number,
    title: string,
    genre: string,
    description: string,
    image: number,
  },
  onPress: () => void,
  styleWrapper?: object | {}
}

const MovieBanner = ({ movie, onPress, styleWrapper }: MovieBannerProps) => {
  const { width } = useWindowDimensions();

  return (
    <Wrapper onPress={onPress} style={styleWrapper} width={`${width * 0.90}px`}>
      <MovieImage source={movie.image} />
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
