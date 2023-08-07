import React, { useState } from "react";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Tweet } from "@components/Tweet";

export const Dashboard = () => {
  const [tweets, setTweets] = useState([]);

  return (
    <Container>
      <Header
        uri="https://avatars.githubusercontent.com/u/7297243?v=4"
        onAvatarPressed={() => {}}
      />

      <Tweet
        uri="https://avatars.githubusercontent.com/u/7297243?v=4"
        name="Antonio Vuono"
        username="@antoniovuono"
        date="12h"
        tweet="UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou"
        onCommentPressed={() => {}}
        onLikePressed={() => {}}
        onSharePressed={() => {}}
      />

      <Tweet
        uri="https://avatars.githubusercontent.com/u/7297243?v=4"
        name="Antonio Vuono"
        username="@antoniovuono"
        date="12h"
        tweet="UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou"
        onCommentPressed={() => {}}
        onLikePressed={() => {}}
        onSharePressed={() => {}}
      />
    </Container>
  );
};
