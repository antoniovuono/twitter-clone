import styled from 'styled-components/native';
import LogotipoIcon from "@assets/icons/logotipo.svg";

export const Container = styled.View`
    width: 100%;
    padding: 10px 20px;
    flex-direction: row;
    align-items: center;
    border-bottom-width: 0.2px;
    border-bottom-color: ${({theme}) => theme.colors.GRAY_200};
    background-color: ${({theme}) => theme.colors.BLACK};
`;



export const Avatar = styled.Image`
    width: 32px;
    height: 32px;
    border-radius: 15px;
`;

export const LogoContent = styled.View`
    flex: 1;
    align-items: center;
`;


