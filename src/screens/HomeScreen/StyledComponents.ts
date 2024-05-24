import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background-color: #0F0F0F;
  flex: 1;
`;

export const SectionHeader = styled.View<{ marginTop?: string }>`
  height: 48px;
  width: 100%;
  padding: 12px 16px;  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${props => props.marginTop ? props.marginTop : 0};
`;

export const Title = styled.Text`
  font-family: Nunito Sans;
  font-weight: 700;
  color: #F5F5F5;
  font-size: 20px;
`;

export const MoviesCardsWrap = styled.ScrollView`
  flex-direction: row;
  padding-horizontal: 16px;
`;

export const IconsWrap = styled.View`
  flex-direction: row;
  align-items: center; 
  gap: 12px;
`;

export const giftImageStyle = {
  height: 43,
  width: 43,
  marginBottom: 8,
};
