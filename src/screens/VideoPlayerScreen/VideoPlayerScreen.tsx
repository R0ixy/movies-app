import React, { useRef, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { useMMKVStorage } from 'react-native-mmkv-storage';
import type { StackScreenProps } from '@react-navigation/stack';

import { MMKV } from '../../asyncStore';
import { VideoPlayer } from '../../components';
import { LastMovieType } from '../../types';
import type { HomeStackParamList } from '../HomeScreen/HomeScreenStack.tsx';

type HomeScreenProps = StackScreenProps<HomeStackParamList, 'VideoPlayer'>;

const VideoPlayerScreen = ({ route }: HomeScreenProps) => {
  const movie = route?.params?.movie;
  const continueWatching = !!route?.params?.continueWatching;

  const { height } = useSafeAreaFrame();

  const [lastMovie, setLastMovie] = useMMKVStorage<LastMovieType | undefined>('lastMovie', MMKV, undefined);

  const [currentViewableItemIndex, setCurrentViewableItemIndex] = useState(0);
  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentViewableItemIndex(viewableItems[0].index ?? 0);
    }
  };

  const listRef = useRef<FlatList>(null);
  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }]);

  const handleNextVideo = (index: number) => {
    if (listRef.current){
      listRef.current.scrollToOffset({ offset: (index + 1) * height });
    }
  };

  const getStartTime = (lastMovie: LastMovieType | undefined, continueWatching: boolean, index: number) => {
    if (!lastMovie || !continueWatching) return 0;
    return lastMovie.episode - 1 === index ? lastMovie.time : 0;
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ref={listRef}
        data={movie?.episodes}
        renderItem={({ item, index }) => (
          <VideoPlayer
            video={item}
            onEndCb={() => {
              if (index + 1 !== movie?.episodes.length) handleNextVideo(index);
              else setLastMovie(undefined);
            }}
            shouldPlay={index === currentViewableItemIndex}
            startTime={getStartTime(lastMovie, continueWatching, index)}
            setLastMovieCb={setLastMovie}
            movie={movie}
          />
        )}
        initialScrollIndex={lastMovie && continueWatching ? lastMovie.episode - 1 : 0}
        getItemLayout={(data, index) => ({ length: height, offset: height * index, index })}
        keyExtractor={item => String(item.id)}
        snapToInterval={height}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        initialNumToRender={1}
        windowSize={2}
        bounces={false}
      />
    </View>
  );
};

export { VideoPlayerScreen };
