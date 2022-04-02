export const AccordionButtonStyle = {
    my: "2.4rem",
    _expanded: {
        bg: "transparent",
        boxShadow: "none",
    },
    _active: {
        outline: "none",
        bg: "white",
        boxShadow: "none",
    },
    _focus: {
        outline: "none",
        bg: "white",
        boxShadow: "none",
    },
    _hover: {
        outline: "none",
        bg: "white",
        boxShadow: "none",
    },
};

export const PeopleGridStyle = {
    templateColumns: {
        base: "1fr",
        sm: "1fr 1fr",
        md: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
    },
    gap: 6,
};

export const PersonButtonFilterStyle = {
    fontWeight: "800",
    fontSize: {
        md: "2.2rem",
        lg: "3.2rem",
    },
    lineHeight: "3.8rem",
    mr: "9.6rem",
    bg: "transparent",
    outline: "none",
    _hover: {
        bg: "transparent",
    },
    _last: {
        mr: 0,
    },
    _focus: {
        outline: 0,
    },
    _active: {
        bg: "transparent",
    },
};

export const PersonNameStyle = {
    fontSize: "2.4rem",
    lineHeight: "3.2rem",
    fontWeight: "800",
    color: "brand.text.1",
    mb: "2px",
    mt: "2.4rem",
};

export const PersonPositionStyle = {
    fontSize: "1.4rem",
    lineHeight: "2.1rem",
    color: "brand.text.3",
    mb: "1.6rem",
};

export const PersonTextStyle = {
    fontSize: "1.4rem",
    lineHeight: "2.1rem",
    color: "brand.text.2",
    mb: "8px",
    noOfLines: {
        base: 2,
        lg: 3,
    },
};

export const PersonStoryBoxStyle = {
    display: {
        base: "flex",
        lg: "grid",
    },
    justifyContent: {
        base: "space-between",
        lg: "undefined",
    },
};

export const ShowButton = {
    fontSize: "1.6rem",
    lineHeight: "2.4rem",
    border: "1px solid black",
    bg: "transparent",
    my: "10rem",
    _hover: {
        bg: "brand.text.1",
        color: "white",
    },
    _focus: {
        outline: "none",
    },
};
