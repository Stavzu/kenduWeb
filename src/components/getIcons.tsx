import { Chat } from "../assets/svg/chat";
import { Code } from "../assets/svg/code";
import { Heart } from "../assets/svg/heart";
import { ImageGallery } from "../assets/svg/image-gallery";
import { Trophy } from "../assets/svg/trophy";
import { Users } from "../assets/svg/users";
import { TrendingUp } from "../assets/svg/trending-up";

export const getIcon = ({
    icon,
    width,
    height,
}: {
    icon: string;
    width: string;
    height: string;
}) => {
    switch (icon) {
        case "Heart":
            return <Heart width={width} height={height} />;
        case "Code":
            return <Code width={width} height={height} />;
        case "Users":
            return <Users width={width} height={height} />;
        case "Trophy":
            return <Trophy width={width} height={height} />;
        case "ImageGallery":
            return <ImageGallery width={width} height={height} />;
        case "Chat":
            return <Chat width={width} height={height} />;
        case "TrendingUp":
            return <TrendingUp width={width} height={height} />;
        default:
            return <Chat width={width} height={height} />;
    }
};
