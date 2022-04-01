import { Facebook } from "../../assets/svg/facebook";
import { Instagram } from "../../assets/svg/instagram";
import { Twitter } from "../../assets/svg/twitter";
import { Youtube } from "../../assets/svg/youtube";

export const navigationData = [
    { id: 1, text: "O nás", link: "/o-nas" },
    {
        id: 2,
        text: "Co děláme",
        link: "co-delame",
        subItems: [
            { id: 11, text: "Mentoring", link: "/mentoring" },
            { id: 22, text: "Akademie", link: "/akademie" },
            { id: 33, text: "Meetupy", link: "/meetupy" },
        ],
    },
    { id: 3, text: "Příběhy", link: "/pribehy" },
    { id: 4, text: "Partneři", link: "/partneri" },
    { id: 5, text: "Kontakt", link: "/kontakt" },
];

export const getSocialIconsData = ({ width, height, color }: any) => [
    {
        id: 1,
        icon: <Facebook width={width} height={height} color={color} />,
        link: "https://www.facebook.com/ReactGirlsPrague",
    },
    {
        id: 2,
        icon: <Twitter width={width} height={height} color={color} />,
        link: "https://twitter.com/ReactGirlsPraha",
    },
    {
        id: 3,
        icon: <Instagram width={width} height={height} color={color} />,
        link: "https://www.instagram.com/accounts/login/?next=/reactgirlsprague/",
    },
    {
        id: 4,
        icon: <Youtube width={width} height={height} color={color} />,
        link: "https://twitter.com/ReactGirlsPraha",
    },
];

export const footerNavigationData = [
    { id: 1, text: "O nás", link: "/o-nas", mobile: true, section: "page" },
    { id: 2, text: "Příběhy", link: "/pribehy", mobile: true, section: "page" },
    {
        id: 3,
        text: "Mentoring",
        link: "/mentoring",
        mobile: true,
        section: "page",
    },
    {
        id: 4,
        text: "Akademie",
        link: "/akademie",
        mobile: true,
        section: "page",
    },
    { id: 5, text: "Meetupy", link: "/meetupy", mobile: true, section: "page" },
    {
        id: 6,
        text: "Partneři",
        link: "/partneri",
        mobile: true,
        section: "contact",
    },
    {
        id: 7,
        text: "Kontakty",
        link: "/kontakty",
        mobile: true,
        section: "contact",
    },
    { id: 9, text: "Slack", link: "/o-nas", mobile: false, section: "social" },
    {
        id: 10,
        text: "Medium",
        link: "https://reactgirls.medium.com/",
        mobile: false,
        section: "social",
    },
    {
        id: 11,
        text: "Facebook",
        link: "https://www.facebook.com/ReactGirlsPrague",
        mobile: false,
        section: "social",
    },
    {
        id: 12,
        text: "Instagram",
        link: "https://www.instagram.com/accounts/login/?next=/reactgirlsprague/",
        mobile: true,
        section: "social",
    },
    {
        id: 13,
        text: "Twitter",
        link: "https://twitter.com/ReactGirlsPraha",
        mobile: false,
        section: "social",
    },
    {
        id: 14,
        text: "Ochrana osobních údajů",
        link: "/o-nas",
        mobile: true,
        section: "personal",
    },
    {
        id: 15,
        text: "Podmínky",
        link: "/o-nas",
        mobile: true,
        section: "personal",
    },
];
