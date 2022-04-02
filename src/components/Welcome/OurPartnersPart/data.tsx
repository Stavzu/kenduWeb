import React from "react";
import { Image } from "@chakra-ui/react";
import { ISocialLink } from "./type";
import { PartnerType } from "../../constants";

export const socialLinks: ISocialLink[] = [
    {
        id: 1,
        type: PartnerType.GOLD,
        image: <Image src="/images/partners/livesport.png" alt="livesport" />,
        link: "https://reactgirls.medium.com/",
    },
    {
        id: 2,
        type: PartnerType.GOLD,
        image: <Image src="/images/partners/applifting.png" alt="applifting" />,
        link: "https://www.instagram.com/accounts/login/?next=/reactgirlsprague/",
    },
    {
        id: 3,
        type: PartnerType.GOLD,
        image: <Image src="/images/partners/barclays.png" alt="barclays" />,
        link: "https://twitter.com/ReactGirlsPraha",
    },
    {
        id: 4,
        type: PartnerType.SILVER,
        image: <Image src="/images/partners/laufen.png" alt="laufen" />,
        link: "https://reactgirls.medium.com/",
    },
    {
        id: 5,
        type: PartnerType.SILVER,
        image: <Image src="/images/partners/ppcbee.png" alt="ppcbee" />,
        link: "https://www.instagram.com/accounts/login/?next=/reactgirlsprague/",
    },
    {
        id: 6,
        type: PartnerType.SILVER,
        image: (
            <Image src="/images/partners/productboard.png" alt="productboard" />
        ),
        link: "https://twitter.com/ReactGirlsPraha",
    },

    {
        id: 7,
        type: PartnerType.SILVER,
        image: <Image src="/images/partners/credo.png" alt="credo" />,
        link: "https://reactgirls.medium.com/",
    },
    {
        id: 8,
        type: PartnerType.SILVER,
        image: <Image src="/images/partners/deepnote.png" alt="deepnote" />,
        link: "https://www.instagram.com/accounts/login/?next=/reactgirlsprague/",
    },
    {
        id: 9,
        type: PartnerType.COMMUNITY,
        image: <Image src="/images/partners/techtaboo.png" alt="techtaboo" />,
        link: "https://twitter.com/ReactGirlsPraha",
    },
    {
        id: 10,
        type: PartnerType.COMMUNITY,
        image: <Image src="/images/partners/ngnexttech.png" alt="ngnexttech" />,
        link: "https://reactgirls.medium.com/",
    },
    {
        id: 11,
        type: PartnerType.COMMUNITY,
        image: (
            <Image
                src="/images/partners/focusindustry.png"
                alt="focusindustry"
            />
        ),
        link: "https://www.instagram.com/accounts/login/?next=/reactgirlsprague/",
    },
    {
        id: 312,
        type: PartnerType.COMMUNITY,
        image: <Image src="/images/partners/oakslab.png" alt="oakslab" />,
        link: "https://twitter.com/ReactGirlsPraha",
    },
    {
        id: 13,
        type: PartnerType.COMMUNITY,
        image: (
            <Image src="/images/partners/satoshilabs.png" alt="satoshilab" />
        ),
        link: "https://www.instagram.com/accounts/login/?next=/reactgirlsprague/",
    },
    {
        id: 14,
        type: PartnerType.COMMUNITY,
        image: <Image src="/images/partners/puntoverde.png" alt="puntoverde" />,
        link: "https://twitter.com/ReactGirlsPraha",
    },
    {
        id: 15,
        type: PartnerType.COMMUNITY,
        image: <Image src="/images/partners/jigx.png" alt="jigx" />,
        link: "https://twitter.com/ReactGirlsPraha",
    },
];
