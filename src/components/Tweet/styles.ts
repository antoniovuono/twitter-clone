import { css } from 'styled-components';
import styled from 'styled-components/native';
import { IdentificationProps } from './interface';


export const Container = styled.View`
   width: 100%;
   height: 143px;
   padding: 10px 20px;
   flex-direction: row;
   border-bottom-width: 0.2px;
   border-bottom-color: ${({theme}) => theme.colors.GRAY_200};
`;

export const AvatarContent = styled.View`
    height: 100%;
    width: 16%;
    justify-content: center;

`;


export const Avatar = styled.Image`
    width: 55px;
    height: 55px;
    border-radius: 25px;
`;

export const TweetContent = styled.View`
    width: 84%;
    padding: 2px 8px;

`;

export const IdentificationContent = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TextLabel = styled.Text<IdentificationProps>`
    font-size: 14px;
    letter-spacing: -0.3px;
    margin-right: 3px;

   ${({theme, type}) => css`
      color: ${type === 'PRIMARY' ? theme.colors.WHITE : theme.colors.GRAY_300};
      font-family: ${type === 'PRIMARY' ? theme.fonts.PRIMARY_SEMIBOLD : theme.fonts.PRIMARY_REGULAR};
   `};
`;

export const TextContent= styled.View`
    padding: 2px 0;
`;

export const TweetText = styled.Text`
    font-size: 14px;
    letter-spacing: -0.3px;
    margin-right: 3px;

   ${({theme}) => css`
      color: ${theme.colors.WHITE};
      font-family: ${theme.fonts.PRIMARY_REGULAR};
   `};
`;

export const TweetInteractionButton = styled.TouchableOpacity`
    margin-right: 15px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const TweetInteractionText = styled.Text`
   margin-left: 3px;
`;

export const TweetInteraction = styled.View`
    padding: 2px;
    flex-direction: row;
    justify-content: flex-end;
`;
