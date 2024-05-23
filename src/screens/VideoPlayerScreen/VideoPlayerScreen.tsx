import React, { useRef, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useSafeAreaFrame } from "react-native-safe-area-context";

import { VideoPlayer } from '../../components';

const videos = [
  {
    id: 1,
    episode: 1,
    url: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/convertedwife.m3u8',
  },
  {
    id: 2,
    episode: 2,
    url: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/2wife2.m3u8',
  },
  {
    id: 3,
    episode: 3,
    url: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/3wife3.m3u8',
  },
  {
    id: 4,
    episode: 4,
    url: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/4wife4.m3u8',
  },
  {
    id: 5,
    episode: 5,
    url: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/5wife5.m3u8',
  },
  {
    id: 6,
    episode: 6,
    url: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/6wife6.m3u8',
  },
  {
    id: 7,
    episode: 7,
    url: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/7wife7.m3u8',
  },
  {
    id: 8,
    episode: 8,
    url: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/8wife8.m3u8',
  },
];

const VideoPlayerScreen = () => {
  const { height } = useSafeAreaFrame();

  const [currentViewableItemIndex, setCurrentViewableItemIndex] = useState(0);
  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 }

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentViewableItemIndex(viewableItems[0].index ?? 0);
    }
  }

  const listRef = useRef<FlatList>(null);
  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }])

  const handleNextVideo = (index: number) => {
    if (listRef.current){
      listRef.current.scrollToOffset({ offset: (index + 1) * height });
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ref={listRef}
        data={videos}
        renderItem={({ item, index }) => (
          <VideoPlayer video={item} onEndCb={() => handleNextVideo(index)} shouldPlay={index === currentViewableItemIndex} />
        )}
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
