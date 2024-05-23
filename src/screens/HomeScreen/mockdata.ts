import movieBanner from "../../assets/images/movie-banner-1.png";
import cover1 from "../../assets/images/cover-1.1.png";
import cover2 from "../../assets/images/cover-1.2.png";
import cover3 from "../../assets/images/cover-1.3.png";
import cover4 from "../../assets/images/cover-2.1.png";
import cover5 from "../../assets/images/cover-2.2.png";
import cover6 from "../../assets/images/cover-2.3.png";

const banners = [
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

const tranding = [
  {
    id: 1,
    title: 'Lethal Limits',
    releaseDate: '02.05.2024',
    image: cover1,
  },
  {
    id: 2,
    title: 'Beautiful Revenge',
    releaseDate: '02.07.2024',
    image: cover2,
  },
  {
    id: 3,
    title: 'Sin De Rella',
    releaseDate: '02.07.2024',
    image: cover3,
  },
  {
    id: 4,
    title: 'Sin De Rella',
    releaseDate: '02.07.2024',
    image: cover1,
  },
];

const topRomance = [
  {
    id: 1,
    title: 'Alpha\'s Detective',
    releaseDate: '02.05.2024',
    image: cover4,
  },
  {
    id: 2,
    title: 'Trained for Seduction',
    releaseDate: '02.07.2024',
    image: cover5,
  },
  {
    id: 3,
    title: 'Crescent',
    releaseDate: '02.07.2024',
    image: cover6,
  },
  {
    id: 4,
    title: 'Crescent',
    releaseDate: '02.07.2024',
    image: cover4,
  },
];

const homeScreenContent = [
  {
    id: 1,
    label: 'Trending Now',
    content: tranding,
  },
  {
    id: 2,
    label: 'Top Romance',
    content: topRomance,
  },
]

export { banners, homeScreenContent };
