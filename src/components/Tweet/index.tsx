import React from "react";

import {
  Avatar,
  AvatarContent,
  CommentsIcon,
  Container,
  IdentificationContent,
  LikeIcon,
  ShareIcon,
  Content,
  TextLabel,
  TweetContent,
  TweetInteractionButton,
  TweetInteractionText,
  TweetText,
  TweetInteractionContent,
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
          <TextLabel isBold>{name}</TextLabel>
          <TextLabel>{username}</TextLabel>
          <TextLabel>{date}</TextLabel>
        </IdentificationContent>

        <Content>
          <TweetText>{tweet}</TweetText>
        </Content>

        <TweetInteractionContent>
          <TweetInteractionButton
            onPress={onCommentPressed}
            hitSlop={{ top: 15, bottom: 15, right: 15, left: 15 }}>
            <CommentsIcon />
            <TweetInteractionText>5</TweetInteractionText>
          </TweetInteractionButton>

          <TweetInteractionButton
            onPress={onLikePressed}
            hitSlop={{ top: 15, bottom: 15, right: 15, left: 15 }}>
            <LikeIcon />
            <TweetInteractionText>25</TweetInteractionText>
          </TweetInteractionButton>

          <TweetInteractionButton
            onPress={onSharePressed}
            hitSlop={{ top: 15, bottom: 15, right: 15, left: 15 }}>
            <ShareIcon style={{ marginRight: 15 }} />
          </TweetInteractionButton>
        </TweetInteractionContent>
      </TweetContent>
    </Container>
  );
};
