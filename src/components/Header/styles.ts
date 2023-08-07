import styled from 'styled-components/native';
import LogotipoIcon from "@assets/icons/logotipo.svg";

export const Container = styled.View`
    padding: 0 20px;
    height: 50px;
    width: 100%;
    border-bottom: 0.5px solid;
    /* border-bottom-width: 1px;
    border-bottom-color: ${({theme}) => theme.colors.GRAY_200}; */
    background-color: ${({theme}) => theme.colors.WHITE};

    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.Image`
    width: 32px;
    height: 32px;
    border-radius: 15px;
    justify-content: flex-start;
`;

export const LogoContainer = styled.View`
    flex: 1;
    align-items: center;
`;

export const LogoIcon = styled(LogotipoIcon)`
    margin-right: 20px;
`;