import React from 'react';
import { ScrollView, Text } from 'react-native';

// @ts-ignore
import movieBanner from '../../assets/images/movie_banner_1.png'

import { MovieBanner } from '../../components';
import { MoviesCardsWrap, SectionHeader, Title, Wrapper } from './StyledComponents.ts';

const movies = [
  {
    id: 1,
    title: 'Lethal Limits',
    genre: 'romance',
    description: 'Dustin\'s Gamble',
    image: movieBanner,
  },
  {
    id: 2,
    title: 'Lethal Limits',
    genre: 'romance',
    description: 'Dustin\'s Gamble',
    image: movieBanner,
  }
];

const HomeScreen = () => {
  return (
    <Wrapper>
      <SectionHeader>
        <Title>Home</Title>
        {/*<Title>df</Title>*/}
      </SectionHeader>
      <ScrollView horizontal pagingEnabled>
        <MoviesCardsWrap>
          {movies.map((movie) => (
            <MovieBanner key={movie.id} movie={movie} />
          ))}
        </MoviesCardsWrap>
      </ScrollView>
    </Wrapper>
  );
};

export { HomeScreen };
