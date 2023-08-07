import React from "react";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Tweet } from "@components/Tweet";

export const Dashboard = () => {
  return (
    <Container>
      <Header
        uri="https://avatars.githubusercontent.com/u/7297243?v=4"
        onAvatarPressed={() => {}}
      />

      <Tweet />
    </Container>
  );
};
