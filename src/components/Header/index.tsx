import React from "react";

import { Avatar, Container, LogoContainer, LogoIcon } from "./styles";
import { TouchableOpacity } from "react-native";
import { HeaderProps } from "./interfaces";

export const Header = ({ uri, onAvatarPressed }: HeaderProps) => {
  return (
    <Container>
      <TouchableOpacity onPress={onAvatarPressed} activeOpacity={0.7}>
        <Avatar source={{ uri: uri }} />
      </TouchableOpacity>

      <LogoContainer>
        <LogoIcon />
      </LogoContainer>
    </Container>
  );
};
