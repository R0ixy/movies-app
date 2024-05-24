import React, { useRef, useEffect, useState } from 'react';
import { ActivityIndicator, View, ImageURISource, TouchableOpacity } from 'react-native';
import Video, { VideoRef } from 'react-native-video';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

import sliderThumb from '../../assets/images/slider-thumb.png';
import { Icon } from '../Icon';
import { PlayPauseSwitcher } from '../PlayPauseSwitcher';
import { MovieType, LastMovieType } from '../../types';
import { EpisodeNumber, Footer, Header, SliderWrap, TimeText, TimeWrap } from './StyledComponents.ts';

type VideoPlayerProps = {
  video: {
    id: number,
    episode: number,
    url: string,
  },
  shouldPlay: boolean,
  startTime: number,
  movie: MovieType,
  onEndCb: () => void,
  setLastMovieCb: (value: (LastMovieType | ((prevValue: (LastMovieType | undefined)) => (LastMovieType | undefined)) | undefined)) => void,
};

const VideoPlayer = ({ video, shouldPlay, startTime, movie, onEndCb, setLastMovieCb }: VideoPlayerProps) => {
  const videoRef = useRef<VideoRef>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<number | undefined>(0);

  const navigation = useNavigation();
  const { width, height } = useSafeAreaFrame();

  const [isLoading, setIsLoading] = useState(false);

  const [isPaused, setIsPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const onPlayPausePress = () => {
    setIsPaused(prev => !prev);
  };

  const onSeek = (time: number) => {
    if (videoRef.current) {
      videoRef.current.seek(time);
      setCurrentTime(time);
    }
  };

  const formatSeconds = (seconds: number) => {
    const roundedSeconds = Math.round(Number(seconds));

    const minutes = Math.floor(roundedSeconds / 60);
    const remainingSeconds = roundedSeconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const startTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  const handleTouch = () => {
    onPlayPausePress();
    setIsVisible(true);
    startTimer();
  };

  useEffect(() => {
    if (!videoRef.current) return;
    if (shouldPlay) {
      videoRef.current.seek(startTime);
      videoRef.current.resume();
      setIsPaused(false);
      setIsVisible(true);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  }, [shouldPlay]);

  useEffect(() => {
    startTimer();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      if (shouldPlay && progressRef.current) {
        setLastMovieCb({
          episode: video.episode,
          time: progressRef.current,
          movie,
        });
      }
    };
  }, [shouldPlay]);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0F0F0F',
        width: width,
        height: height,
      }}
    >
      <Video
        onTouchStart={handleTouch}
        source={{ uri: video.url }}
        ref={videoRef}
        onLoadStart={() => setIsLoading(true)}
        onLoad={(data) => {
          setIsLoading(false);
          setDuration(data.duration);
        }}
        onEnd={() => {
          progressRef.current = undefined;
          onEndCb();
        }}
        paused={isPaused}
        onProgress={(data) => {
          setCurrentTime(data.currentTime);
          progressRef.current = data.currentTime;
        }}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      {isVisible && (
        <>
          <Header colors={['#0F0F0F', 'rgba(0,0,0,0)']}>
            <TouchableOpacity onPress={navigation.goBack} style={{ position: 'absolute', left: 22 }}>
              <Icon name="close" size={24} />
            </TouchableOpacity>
            <EpisodeNumber>Episode {video.episode}</EpisodeNumber>
          </Header>
          <Footer colors={['rgba(0,0,0,0)', '#0F0F0F']}>
            <PlayPauseSwitcher paused={isPaused} onPressCb={onPlayPausePress} styleWrapper={{ bottom: 7 }} />
            <SliderWrap>
              <Slider
                style={{
                  width: '100%',
                }}
                tapToSeek
                value={currentTime}
                minimumValue={0}
                maximumValue={duration}
                onSlidingComplete={onSeek}
                thumbImage={sliderThumb as ImageURISource}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
              />
              <TimeWrap>
                <TimeText>{formatSeconds(currentTime)}</TimeText>
                <TimeText>{formatSeconds(duration)}</TimeText>
              </TimeWrap>
            </SliderWrap>
          </Footer>
        </>
      )}
      {isLoading && <ActivityIndicator color="#fff" style={{ position: 'absolute' }} />}
    </View>
  );
};

export { VideoPlayer };
