import React from 'react';

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
    image: object,
  }
}

const MovieBanner = ({ movie }: MovieBannerProps) => {
  return (
    <Wrapper>
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
