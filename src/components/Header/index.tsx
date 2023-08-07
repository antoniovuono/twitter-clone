import React from "react";

import { Avatar, Container, LogoContainer, LogoIcon } from "./styles";
import { TouchableOpacity } from "react-native";

type Props = {
  uri: string;
  onAvatarPressed: () => void;
};

export const Header = ({ uri, onAvatarPressed }: Props) => {
  return (
    <Container>
      <TouchableOpacity onPress={onAvatarPressed}>
        <Avatar source={{ uri: uri }} />
      </TouchableOpacity>

      <LogoContainer>
        <LogoIcon />
      </LogoContainer>
    </Container>
  );
};
