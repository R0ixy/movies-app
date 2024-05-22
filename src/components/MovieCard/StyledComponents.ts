import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 120px;
    
`;

export const CardImage = styled.Image`
  width: 120px;
  height: 150px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const CardTitle = styled.Text`
  font-family: Nunito Sans;
  font-size: 14px;
  font-weight: 600;
  color: #EBEDF0;  
`;

export const ReleaseDate = styled.Text`
  font-family: Nunito Sans;
  font-weight: 800;
  color: #00BFE5;
  text-transform: uppercase;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 0.01em;
  margin-bottom: 4px;  
`;

export const IconWrap = styled.View`
  position: absolute;
  top: 51px;  
  left: 36px;  
`;
