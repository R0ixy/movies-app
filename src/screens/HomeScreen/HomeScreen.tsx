import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import remoteConfig from '@react-native-firebase/remote-config';
import { useMMKVStorage } from 'react-native-mmkv-storage';

import gift from '../../assets/images/gift.png';
import { MovieBanner, MovieCard, Icon, ContinueWatching } from '../../components';
import { LastMovieType, MovieType } from '../../types';
import { MMKV } from '../../asyncStore';

import { MoviesCardsWrap, SectionHeader, Title, Wrapper, IconsWrap, giftImageStyle } from './StyledComponents.ts';
import type { HomeStackParamList } from './HomeScreenStack.tsx';

type HomeScreenProps = StackScreenProps<HomeStackParamList, 'HomeScreen'>;

type SectionItem = {
  id: number,
  label: string,
  content: MovieType[],
};

type HomeScreenContentType = {
  banners?: MovieType[],
  sections?: SectionItem[],
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {

  const [content, setContent] = useState<HomeScreenContentType>({});

  const [lastMovie] = useMMKVStorage<LastMovieType | undefined>('lastMovie', MMKV, undefined);

  const fetchRemoteConfig = async () => {
    await remoteConfig().setConfigSettings({
      minimumFetchIntervalMillis: 60000,
    });

    await remoteConfig().fetchAndActivate();

    const config = remoteConfig().getValue('content').asString();
    if (config) {
      return JSON.parse(config);
    } 
    return null;
  };

  useEffect(() => {
    fetchRemoteConfig()
      .then(res => setContent(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <Wrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionHeader>
          <Title>Home</Title>
          <IconsWrap>
            <TouchableOpacity activeOpacity={0.8}>
              <Image source={gift} style={giftImageStyle} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <Icon name="search" size={24} />
            </TouchableOpacity>
          </IconsWrap>
        </SectionHeader>
        {content?.banners && (
          <View style={{ height: 216 }}>
            <MoviesCardsWrap horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
              {content?.banners?.map((banner) => (
                <MovieBanner
                  key={banner.id}
                  movie={banner}
                  onPressCb={() => navigation.navigate('VideoPlayer', { movie: banner })}
                  styleWrapper={{ marginRight: 12 }}
                />
              ))}
            </MoviesCardsWrap>
          </View>
        )}
        {lastMovie && (
          <View>
            <SectionHeader marginTop="36px">
              <Title>Continue Watching</Title>
            </SectionHeader>
            <ContinueWatching
              movie={lastMovie.movie}
              onPressCb={() => navigation.navigate('VideoPlayer', { movie: lastMovie?.movie, continueWatching: true })}
            />
          </View>
        )}
        {content?.sections?.map(item => (
          <View key={item.id}>
            <SectionHeader marginTop="36px">
              <Title>{item.label}</Title>
            </SectionHeader>
            <MoviesCardsWrap horizontal showsHorizontalScrollIndicator={false}>
              {item.content.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onPressCb={() => navigation.navigate('VideoPlayer', { movie })}
                  styleWrapper={{ marginRight: 12 }}
                />
              ))}
            </MoviesCardsWrap>
          </View>
        ))}
      </ScrollView>
    </Wrapper>
  );
};

export { HomeScreen };
