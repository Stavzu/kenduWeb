export const BlockStyle = (reverse: boolean) => ({
    display: {
        base: "grid",
        lg: "flex",
    },
    flexDirection: {
        base: reverse ? "row-reverse" : undefined,
    },
    mb: "8.2rem",
});

export const ImageBlockStyle = {
    display: "flex",
    justifyContent: "center",
    height: {
        lg: "73rem",
    },
    width: {
        lg: "64rem",
    },
    maxW: {
        base: "100%",
        sm: "32.7rem",
        lg: "initial",
    },
};

export const PositionStyle = {
    fontFamily: "fonts.headline",
    fontSize: {
        base: "1rem",
        lg: "1.4rem",
    },
    fontWeight: "300",
    lineHeight: "140%",
    color: "brand.text.2",
    mt: {
        base: "2.2rem",
        lg: "23rem",
    },
    textAlign: {
        sm: "center",
        lg: "initial",
    },
};

export const NameStyle = {
    fontSize: {
        base: "2.4rem",
        lg: "3.2rem",
    },
    fontWeight: "800",
    lineHeight: "120%",
    mt: {
        base: "0.4rem",
        md: "0.8rem",
    },
    textAlign: {
        sm: "center",
        lg: "initial",
    },
};

export const TitleStyle = {
    fontSize: {
        base: "4rem",
        lg: "5.6rem",
    },
    fontWeight: "800",
    lineHeight: "116%",
    color: "brand.text.1",
    mt: {
        base: "3.2rem",
        lg: "8rem",
    },
    textAlign: {
        sm: "center",
        lg: "initial",
    },
};

export const LinkStyle = {
    display: "flex",
    alignItems: "center",
    mt: "2.4rem",
    justifyContent: {
        sm: "center",
        lg: "initial",
    },
};

export const MainLinkStory = {
    fontSize: {
        base: "2.4rem",
        lg: "3.2rem",
    },
    fontWeight: "800",
    lineHeight: "120%",
    color: "brand.orange.1",
    mr: "0.8rem",
};
