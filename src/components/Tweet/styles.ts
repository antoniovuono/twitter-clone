import { css } from 'styled-components';
import styled from 'styled-components/native';

type IdentificationText = 'PRIMARY' | 'SECONDARY';

type IdentificationProps = {
    type?: IdentificationText;
}

export const Container = styled.View`
   width: 100%;
   height: 143px;
   padding: 28px 20px;
   flex-direction: row;

   border-top-width: 1px;
   border-top-color: ${({theme}) => theme.colors.GRAY_200};
   border-bottom-width: 1px;
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
    padding: 0 8px;
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
      color: ${type === 'PRIMARY' ? theme.colors.BLACK : theme.colors.GRAY_300};
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
      color: ${theme.colors.BLACK};
      font-family: ${theme.fonts.PRIMARY_REGULAR};
   `};

`;
