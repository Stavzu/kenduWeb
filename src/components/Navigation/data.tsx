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

export const socialIconsData = [
    { id: 1, icon: <Facebook />, link: "o-nas" },
    {
        id: 2,
        icon: <Twitter />,
        link: "co-delame",
    },
    { id: 3, icon: <Instagram />, link: "pribehy" },
    { id: 4, icon: <Youtube />, link: "pribehy" },
];
