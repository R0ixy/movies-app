type EpisodeType = {
  id: number,
  episode: string,
  url: string,
};

export type MovieType = {
  id: number,
  title: string,
  genre: string,
  description: string,
  releaseDate: string,
  image: string,
  episodes: EpisodeType[]
};

export type LastMovieType = {
  episode: number,
  time: number,
  movie: MovieType,
};
