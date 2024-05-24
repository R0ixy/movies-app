export type MovieType = {
  id: number,
  title: string,
  genre: string,
  description: string,
  releaseDate: string,
  image: string,
};

export type LastMovieType = {
  currentEpisode: number,
  currentTime: number,
  movie: MovieType,
};
