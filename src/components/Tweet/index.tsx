import React from "react";
import { ChatCircleText, Heart, Export } from "phosphor-react-native";
import { useTheme } from "styled-components";

import {
  Avatar,
  AvatarContent,
  Container,
  IdentificationContent,
  TextContent,
  TextLabel,
  TweetContent,
  TweetInteraction,
  TweetInteractionButton,
  TweetInteractionText,
  TweetText,
} from "./styles";
import { TweetProps } from "./interface";

export const Tweet = ({
  uri,
  name,
  username,
  date,
  tweet,
  onCommentPressed,
  onLikePressed,
  onSharePressed,
}: TweetProps) => {
  return (
    <Container>
      <AvatarContent>
        <Avatar source={{ uri: uri }} />
      </AvatarContent>

      <TweetContent>
        <IdentificationContent>
          <TextLabel type="PRIMARY">{name}</TextLabel>
          <TextLabel>{username}</TextLabel>
          <TextLabel>{date}</TextLabel>
        </IdentificationContent>
        <TextContent>
          <TweetText numberOfLines={4}>{tweet}</TweetText>
        </TextContent>

        <TweetInteraction>
          <TweetInteractionButton
            onPress={onCommentPressed}
            hitSlop={{ top: 15, bottom: 15, right: 15, left: 15 }}>
            <ChatCircleText color="#000000" size={18} />
            <TweetInteractionText>5</TweetInteractionText>
          </TweetInteractionButton>

          <TweetInteractionButton
            onPress={onLikePressed}
            hitSlop={{ top: 15, bottom: 15, right: 15, left: 15 }}>
            <Heart color="#000000" size={18} />
            <TweetInteractionText>25</TweetInteractionText>
          </TweetInteractionButton>

          <TweetInteractionButton
            onPress={onSharePressed}
            hitSlop={{ top: 15, bottom: 15, right: 15, left: 15 }}>
            <Export color="#000000" size={18} />
          </TweetInteractionButton>
        </TweetInteraction>
      </TweetContent>
    </Container>
  );
};
