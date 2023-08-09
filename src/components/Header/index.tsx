import React from "react";
import LogotipoIcon from "@assets/icons/logotipo.svg";
import { Avatar, Container, LogoContent } from "./styles";
import { TouchableOpacity } from "react-native";
import { HeaderProps } from "./interfaces";

export const Header = ({ uri, onAvatarPressed }: HeaderProps) => {
  return (
    <Container>
      <TouchableOpacity onPress={onAvatarPressed} activeOpacity={0.7}>
        <Avatar source={{ uri: uri }} />
      </TouchableOpacity>

      <LogoContent>
        <LogotipoIcon />
      </LogoContent>
    </Container>
  );
};
