import React from "react";
import { Image } from "@chakra-ui/react";
import instagram from "../../../assets/images/social/instagram.png";
import twitter from "../../../assets/images/social/twitter.png";
import medium from "../../../assets/images/social/medium.png";

export const socialLinks = [
    {
        id: 1,
        image: <Image src={medium} alt="Medium" />,
        link: "https://reactgirls.medium.com/",
    },
    {
        id: 2,
        image: <Image src={instagram} alt="Instagram" />,
        link: "https://www.instagram.com/accounts/login/?next=/reactgirlsprague/",
    },
    {
        id: 3,
        image: <Image src={twitter} alt="Twitter" />,
        link: "https://twitter.com/ReactGirlsPraha",
    },
];
