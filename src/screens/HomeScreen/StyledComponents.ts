import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background-color: #0F0F0F;
  flex: 1;
  align-items: center;  
`;

export const SectionHeader = styled.View`
  height: 48px;
  width: 100%;
  padding: 12px 16px;  
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: Nunito Sans;
  font-weight: 700;
  color: #F5F5F5;
  font-size: 20px;
`;

export const MoviesCardsWrap = styled.View`
  flex-direction: row;
  flex: 1;
  gap: 20px;
  padding-horizontal: 16px;  
`;
