import React from 'react';
import { View, Image, TouchableOpacity } from "react-native";

import gift from '../../assets/images/gift.png';
import { MovieBanner, MovieCard, Icon } from '../../components';
import { MoviesCardsWrap, SectionHeader, Title, Wrapper, IconsWrap } from './StyledComponents.ts';

import { banners, tranding, topRomance } from './mockdata.ts';

const HomeScreen = () => {
  return (
    <Wrapper showsVerticalScrollIndicator={false}>
      <SectionHeader>
        <Title>Home</Title>
        <IconsWrap>
          <TouchableOpacity activeOpacity={0.8}>
            <Image source={gift} style={{ height: 43, width: 43, marginBottom: 8 }} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Icon name="search" size={24} />
          </TouchableOpacity>
        </IconsWrap>
      </SectionHeader>
      <View style={{ height: 216 }}>
        <MoviesCardsWrap horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
          {banners.map((banner) => (
            <MovieBanner key={banner.id} movie={banner} styleWrapper={{ marginRight: 12 }}/>
          ))}
        </MoviesCardsWrap>
      </View>
      <SectionHeader marginTop="44px">
        <Title>Trending Now</Title>
      </SectionHeader>
      <MoviesCardsWrap horizontal showsHorizontalScrollIndicator={false}>
        {tranding.map((movie) => (
          <MovieCard key={movie.id} movie={movie} styleWrapper={{ marginRight: 12 }}/>
        ))}
      </MoviesCardsWrap>
      <SectionHeader marginTop="44px">
        <Title>Top Romance</Title>
      </SectionHeader>
      <MoviesCardsWrap horizontal showsHorizontalScrollIndicator={false}>
        {topRomance.map((movie) => (
          <MovieCard key={movie.id} movie={movie} styleWrapper={{ marginRight: 12 }}/>
        ))}
      </MoviesCardsWrap>
    </Wrapper>
  );
};

export { HomeScreen };
