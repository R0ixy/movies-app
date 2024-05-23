import React from 'react';
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import type { StackScreenProps } from '@react-navigation/stack';

import gift from '../../assets/images/gift.png';
import { MovieBanner, MovieCard, Icon, ContinueWatching } from '@components';

import { MoviesCardsWrap, SectionHeader, Title, Wrapper, IconsWrap } from './StyledComponents.ts';
import { banners, homeScreenContent } from './mockdata.ts';
import type { HomeStackParamList } from './HomeScreenStack.tsx';

type HomeScreenProps = StackScreenProps<HomeStackParamList, 'HomeScreen'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {

  return (
    <Wrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
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
              <MovieBanner
                key={banner.id}
                movie={banner}
                onPress={() => navigation.navigate('VideoPlayer')}
                styleWrapper={{ marginRight: 12 }}
              />
            ))}
          </MoviesCardsWrap>
        </View>
        <View>
          <SectionHeader marginTop="36px">
            <Title>Continue Watching</Title>
          </SectionHeader>
          <ContinueWatching />
        </View>
        {homeScreenContent.map(item => (
          <View key={item.id}>
            <SectionHeader marginTop="36px">
              <Title>{item.label}</Title>
            </SectionHeader>
            <MoviesCardsWrap horizontal showsHorizontalScrollIndicator={false}>
              {item.content.map((movie) => (
                <MovieCard key={movie.id} movie={movie} styleWrapper={{ marginRight: 12 }}/>
              ))}
            </MoviesCardsWrap>
          </View>
        ))}
      </ScrollView>
    </Wrapper>
  );
};

export { HomeScreen };
