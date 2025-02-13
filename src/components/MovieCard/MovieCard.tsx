import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon } from '../Icon';
import { MovieType } from '../../types';
import { CardImage, CardTitle, IconWrap, ReleaseDate, Wrapper } from './StyledComponents.ts';

type MovieCardProps = {
  movie: MovieType,
  onPressCb: () => void,
  styleWrapper?: object,
};

const MovieCard = ({ movie, onPressCb, styleWrapper }: MovieCardProps) => {

  const parseDate = (dateString: string) => {
    const [day, month, year] = dateString.split('.');
    return new Date(+year, +month - 1, +day); // Month is 0-indexed
  };

  const handleDate = (dateString: string) => {
    const date = parseDate(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(date);
  };

  const isMovieShown = parseDate(movie.releaseDate) < new Date();

  return (
    <Wrapper as={isMovieShown ? TouchableOpacity : View} onPress={onPressCb} style={styleWrapper}>
      <CardImage source={{ uri: movie.image }} blurRadius={isMovieShown ? 0 : 32} />
      {!isMovieShown && (
        <IconWrap>
          <Icon name="locked" size={48} />
        </IconWrap>
      )}
      {!isMovieShown && <ReleaseDate>{`Coming ${handleDate(movie.releaseDate)}`}</ReleaseDate>}
      <CardTitle>{movie.title}</CardTitle>
    </Wrapper>
  );
};

export { MovieCard };
