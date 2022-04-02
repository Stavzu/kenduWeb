import React from "react";
import { Image } from "@chakra-ui/react";

interface ISocialLinks {
    readonly id: number;
    readonly image: React.ReactNode;
    readonly link: string;
}

export const socialLinks: ISocialLinks[] = [
    {
        id: 1,
        image: <Image src="/images/social/medium.png" alt="Medium" />,
        link: "https://reactgirls.medium.com/",
    },
    {
        id: 2,
        image: <Image src="/images/social/instagram.png" alt="Instagram" />,
        link: "https://www.instagram.com/accounts/login/?next=/reactgirlsprague/",
    },
    {
        id: 3,
        image: <Image src="/images/social/twitter.png" alt="Twitter" />,
        link: "https://twitter.com/ReactGirlsPraha",
    },
];
