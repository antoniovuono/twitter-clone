export type IdentificationText = 'PRIMARY' | 'SECONDARY';

export type IdentificationProps = {
    type?: IdentificationText;
};

export type TweetProps = {
    uri: string;
    name: string;
    username: string;
    date: string;
    tweet: string;
    onCommentPressed: () => void;
    onLikePressed: () => void;
    onSharePressed: () => void;
}