import React, { useRef, useEffect, useState } from "react";
import { ActivityIndicator, View, ImageURISource, TouchableOpacity, SafeAreaView } from "react-native";
import Video, { VideoRef } from "react-native-video";
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';

import sliderThumb from '../../assets/images/slider-thumb.png';
import { Icon } from '../Icon';
import { EpisodeNumber, Footer, Header, SliderWrap, TimeText, TimeWrap } from "./StyledComponents.ts";
import { PlayPauseSwitcher } from "../PlayPauseSwitcher";
import { useSafeAreaFrame } from "react-native-safe-area-context";

type VideoPlayerProps = {
  video: {
    id: number,
    episode: number,
    url: string,
  },
  shouldPlay: boolean,
}

const VideoPlayer = ({ video, shouldPlay }: VideoPlayerProps) => {
  const videoRef = useRef<VideoRef>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const navigation = useNavigation();
  const { width, height } = useSafeAreaFrame();

  const [isLoading, setIsLoading] = useState(false);

  const [paused, setPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [visible, setVisible] = useState(true);

  const onPlayPausePress = () => {
    setPaused(!paused);
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
  }

  const startTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setVisible(false);
    }, 5000);
  };

  const handleTouch = () => {
    onPlayPausePress();
    setVisible(true);
    startTimer();
  };

  useEffect(() => {
    if (!videoRef.current) return;
    if (shouldPlay) {
      videoRef.current.resume();
      setVisible(true);
    } else {
      videoRef.current.pause();
      videoRef.current.seek(0);
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
          setIsLoading(false)
          setDuration(data.duration);
        }}
        paused={paused}
        onProgress={(data) => setCurrentTime(data.currentTime)}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      {visible && (
        <>
          <Header colors={['#000000', 'rgba(0,0,0,0)']}>
            <TouchableOpacity onPress={navigation.goBack} style={{ position: 'absolute', left: 22 }}>
              <Icon name="close" size={24} />
            </TouchableOpacity>
            <EpisodeNumber>Episode {video.episode}</EpisodeNumber>
          </Header>
          <Footer colors={['rgba(0,0,0,0)', '#000000']}>
            <PlayPauseSwitcher paused={paused} onPressCb={onPlayPausePress} />
            <SliderWrap>
              <Slider
                style={{
                  width: '100%'
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
