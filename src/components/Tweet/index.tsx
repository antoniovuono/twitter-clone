import React from "react";

import {
  Avatar,
  AvatarContent,
  Container,
  IdentificationContent,
  TextContent,
  TextLabel,
  TweetContent,
  TweetText,
} from "./styles";

export const Tweet = () => {
  return (
    <Container>
      <AvatarContent>
        <Avatar source={{ uri: "https://avatars.githubusercontent.com/u/7297243?v=4" }} />
      </AvatarContent>

      <TweetContent>
        <IdentificationContent>
          <TextLabel type="PRIMARY">Antonio Vuono</TextLabel>
          <TextLabel>@antoniovuono</TextLabel>
          <TextLabel>12h</TextLabel>
        </IdentificationContent>

        <TextContent>
          <TweetText>
            UXR/UX: You can only bring one item to a remote island to assist your research of native
            use of tools and usability. What do you bring? #TellMeAboutYou
          </TweetText>
        </TextContent>
      </TweetContent>
    </Container>
  );
};
