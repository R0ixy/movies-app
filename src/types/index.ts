export type BannerMovie = {
  id: number;
  title: string;
  genre: string;
  description: string;
  image: string;
}

export type CardMovie = {
  id: number;
  title: string;
  releaseDate: string;
  image: string;
};

export type LastMovieType = {
  currentEpisode: number,
  currentTime: number,
  movie: {
    id: number,
    title: string,
    description: string,
    image: string,
  }
}
