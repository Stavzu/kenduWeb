import { IPhotos } from "./PhotoPart/types";

export const expectationAcademyData = [
    {
        id: 1,
        icon: "Heart",
        subtitle: "Přátelskou atmosféru",
        text: "U nás v Kendu má každý svého mentora, který se ti bude věnovat na 100%. Budeš se tak moct rozvíjet pod profeionálnm vedením",
    },
    {
        id: 2,
        icon: "Users",
        subtitle: "Pomoc od lektorů",
        text: "Naši mentoři nejsou žádná ořezávátka. Mají už něco za sebou a rádi se své zkušenosti předávají dál.",
    },
    {
        id: 3,
        icon: "Code",
        subtitle: "Reálné projekty",
        text: "Nejlépe se naučíš na opravdových projektech, kterých u nás budeš mít dostatek. Ničeho se nemusíš bát, protože na to nikdy nebudeš sama nebo sám.",
    },
];

export const BasicAcademyPriceInfoData = [
    { id: 1, text: "4 offline lekce programování" },
    { id: 2, text: "Závěrečný workshop" },
    { id: 3, text: "Online studijní materiály k akademii" },
    { id: 4, text: "Certifikát o absolvování" },
    { id: 5, text: "Tričko Kendu" },
    { id: 6, text: "Mock interview s HR" },
];

export const AdvanceAcademyPriceInfoData: [
    { id: 1; text: "3 online lekce programování" },
    { id: 2; text: "Závěrečný workshop" },
    { id: 3; text: "Online studijní materiály k akademii" },
    { id: 4; text: "Certifikát o absolvování" },
    { id: 5; text: "Tričko Kendu" },
    { id: 6; text: "Mock interview s HR" }
];

export const AcademyLoginStepData = [
    {
        id: 1,
        subtitle: "Registrace",
        text: "V případě, že je otevřené přihlašování na Mentoring, klikni níže na tlačítko REGISTRACE. Pokud nyní není registrace otevřena, můžeš odebírat náš Newsletter, kde se o startu dalšího běhu Mentoringu v předstihu dozvíš.",
    },
    {
        id: 2,
        subtitle: "Vyplnění formulářů",
        text: "Po kliknutí na tlačítko REGISTRACE se objeví formulář. Při vyplňování nezapomeň zejména na popsání své motivace a přiložení odkazu na GitHub či jiné úložiště tvých kódů.",
    },
    {
        id: 3,
        subtitle: "Kontaktujeme tě",
        text: "Po kliknutí na tlačítko REGISTRACE se objeví formulář. Při vyplňování nezapomeň zejména na popsání své motivace a přiložení odkazu na GitHub či jiné úložiště tvých kódů.",
    },
    {
        id: 4,
        subtitle: "Začínáme",
        text: "Konkrétní informace k přípravě na jednotlivé hodiny zasíláme pár dní před každou lekcí.",
    },
];

export const AcademyQandAData = [
    {
        title: "Pro koho je mentoring určen?",
        content:
            "Začátečnicím, které již mají zkušenosti s programováním, znají základy HTML a CSS, případně JS, a chtěly by je posunout na další úroveň s Reactem.",
    },
    {
        title: "Jak se můžu přihlásit na mentoring?",
        content: "my name is shubam",
    },
    {
        title: "Co si z Mentoringu odnesu?",
        content: "Components",
    },
    {
        title: "Stále si nejsi jistý/jistá?",
        content: "Components",
    },
];

export const photosData: IPhotos[] = [
    {
        id: 1,
        image: "images/events/mentoring-small.png",
        grid: "bigTop",
    },
    {
        id: 2,
        image: "images/events/mentoring-small.png",
        grid: "smallFirst",
    },
    {
        id: 3,
        image: "images/events/mentoring-small.png",
        grid: "smallSecond",
    },
    {
        id: 4,
        image: "images/events/mentoring-small.png",
        grid: "bigBottom",
    },
    {
        id: 5,
        image: "images/events/mentoring-small.png",
        grid: "smallThree",
    },
    {
        id: 6,
        image: "images/events/mentoring-small.png",
        grid: "smallFour",
    },
];
