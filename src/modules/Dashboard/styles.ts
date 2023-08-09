import styled from 'styled-components/native';
import {  SafeAreaView } from "react-native-safe-area-context";
import { Platform } from 'react-native';

export const Container = styled(SafeAreaView)`
   flex: 1;
   padding-top: ${Platform.OS === "ios" ? 35 : 0}px;

   background-color: ${({theme}) => theme.colors.BLACK};
`;






