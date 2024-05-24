import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Wrap = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #0F0F0F;
`;

export const Header = styled(LinearGradient)`
  width: 100%;
  height: 60px;
  flex-direction: row;
  position: absolute;
  top: 0;
  padding-horizontal: 22px;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled(LinearGradient)`
  flex-direction: row;
  position: absolute;
  bottom: 0;
  padding-bottom: 16px;  
  width: 100%;
  align-items: center;
  padding-horizontal: 22px;  
  gap: 27px;
`;

export const EpisodeNumber = styled.Text`
  font-family: Nunito Sans;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #F5F5F5;
`;

export const SliderWrap = styled.View`
  width: 80%;
`;

export const TimeWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;  
`;

export const TimeText = styled.Text`
  font-family: Nunito Sans;
  font-size: 11px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0.08px;
  color: #FFFFFF; 
`;
