import { css } from 'styled-components';
import styled from 'styled-components/native';
import { ChatCircleText, Export, Heart } from 'phosphor-react-native';
import { RFValueConverter } from '../../utils/respFontSize';


export const Container = styled.View`
  width: 100%;
  height: 140px;
  flex-direction: row;

  background-color: red;
  border-bottom-width: 0.2px;
  border-bottom-color: ${({theme}) => theme.colors.GRAY_200};
  background-color: ${({theme}) => theme.colors.BLACK};

  margin-top: 10px;
`;

export const AvatarContent = styled.View`
    width: 20%;
    justify-content: center;
    align-items: center;
`;


export const Avatar = styled.Image`
    height: 60px;
    width: 60px;
    border-radius: 30px;
`;

export const TweetContent = styled.View`
  width: 80%;
`;

export const IdentificationContent = styled.View`
   flex-direction: row;
   height: 20%;
   align-items: center;
`;

export const TextLabel = styled.Text<{isBold?: boolean}>`
    font-size: ${RFValueConverter(12)}px;
    letter-spacing: -0.3px;
    margin-left: 5px;
    ${({theme, isBold}) => css`
        font-family: ${isBold ? theme.fonts.PRIMARY_BOLD : theme.fonts.PRIMARY_REGULAR};
        color: ${theme.colors.WHITE};
    `}
`;

export const Content= styled.View`
   height: 60%;
   padding: 0 20px 10px 10px;
`;

export const TweetText = styled.Text`
    font-size: ${RFValueConverter(12)}px;
    letter-spacing: -0.3px;
    text-align: justify;
    ${({theme}) => css`
        font-family: ${theme.fonts.PRIMARY_REGULAR};
        color: ${theme.colors.WHITE};
    `}
`;

export const TweetInteractionContent = styled.View`
    height: 20%;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0 20px;
`;

export const TweetInteractionButton = styled.TouchableOpacity`
   flex-direction: row;
   margin-left: 5px;
   width: 40px;
   align-items: center;
`;

export const TweetInteractionText = styled.Text`

`;


export const CommentsIcon = styled(ChatCircleText).attrs(({theme}) => ({
    color: theme.colors.WHITE,
    size: 18
}))``;

export const LikeIcon = styled(Heart).attrs(({theme}) => ({
    color: theme.colors.WHITE,
    size: 18
}))``;

export const ShareIcon = styled(Export).attrs(({theme}) => ({ 
    color: theme.colors.WHITE,
    size: 18
}))``;