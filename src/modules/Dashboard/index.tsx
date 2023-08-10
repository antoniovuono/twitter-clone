import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Tweet } from "@components/Tweet";
import { FlatList } from "react-native";
import { TweetProps } from "@components/Tweet/interface";
import { FlashList } from "@shopify/flash-list";

interface Props {
  id?: string;
  uri: string;
  name: string;
  username: string;
  date: string;
  tweet: string;
}

const data = [
  {
    id: "1",
    uri: "https://avatars.githubusercontent.com/u/7297243?v=4",
    name: "Antonio Vuono",
    username: "antoniovuono",
    date: "12",
    tweet:
      "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
  },
  {
    id: "2",
    uri: "https://avatars.githubusercontent.com/u/7297243?v=4",
    name: "Antonio Vuono",
    username: "antoniovuono",
    date: "12",
    tweet:
      "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
  },
  {
    id: "3",
    uri: "https://avatars.githubusercontent.com/u/7297243?v=4",
    name: "Antonio Vuono",
    username: "antoniovuono",
    date: "12",
    tweet:
      "UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou",
  },
];

export const Dashboard = () => {
  const [tweets, setTweets] = useState<Props[]>([]);

  useEffect(() => {
    setTweets(data);
  }, []);

  return (
    <Container>
      <Header
        uri="https://avatars.githubusercontent.com/u/7297243?v=4"
        onAvatarPressed={() => {}}
      />

      <FlashList
        contentContainerStyle={{ paddingBottom: 20 }}
        data={tweets}
        estimatedItemSize={30}
        renderItem={({ item }) => (
          <Tweet
            uri={item.uri}
            name={item.name}
            username={`@${item.username}`}
            tweet={item.tweet}
            date={`${item.date}h`}
            onLikePressed={() => {}}
            onCommentPressed={() => {}}
            onSharePressed={() => {}}
          />
        )}
      />
    </Container>
  );
};
