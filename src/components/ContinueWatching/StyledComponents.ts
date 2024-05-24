import styled from 'styled-components/native';

export const Wrap = styled.TouchableOpacity`
  background-color: #3598D0;
  border-radius: 12px;
  height: 68px;
  min-height: 68px;
  flex: 1;  
  margin-horizontal: 16px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;  
  padding: 6px 16px 6px 6px;  
`;

export const MovieTitle = styled.Text`
  font-family: Nunito Sans;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #EBEDF0;
`;
export const MovieDescription = styled.Text`
  font-family: Nunito Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: #E1E3E6;
`;

export const RowWrap = styled.View`
  flex-direction: row;  
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
