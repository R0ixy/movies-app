import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity<{ width: string }>`
  width: ${props => props.width ? props.width : '100%'};
  height: 216px;
  border-radius: 12px;
  background-color: white;
`;

export const MovieImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: fill;
  border-radius: 12px;
`;

export const GenreLabel = styled.View`
  width: 71px;
  height: 24px;
  background-color: #0F0F0F;  
  top: 8px;
  left: 16px;  
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const GenreText = styled.Text`
  font-family: Nunito Sans;
  font-weight: 700;
  color: #F5F5F5;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.04em;
`;

export const TitleSection = styled.View`
  left: 16px;
  bottom: 16px;
  position: absolute;
`;

export const MovieName = styled.Text`
  font-family: Nunito Sans;
  font-weight: 700;
  color: #F5F5F5;
  font-size: 24px;
`;

export const MovieDescription = styled.Text`
  font-family: Nunito Sans;
  font-weight: 400;
  color: #F5F5F5;
  font-size: 13px;   
`;

