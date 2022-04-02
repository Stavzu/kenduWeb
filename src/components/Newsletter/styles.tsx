export const buttonStyle = {
    fontSize: "md",
    m: {
        base: "1rem 0",
        md: "2",
    },
    height: {
        base: "5.6rem",
        md: "auto",
    },
    w: {
        base: "auto",
        md: "fit-content",
    },
    px: "4rem",
    bg: "brand.grey.10",
    colorL: "brand.white",
    fontWeight: "400",
    _hover: {
        color: "brand.grey.10",
        bg: "transparent",
        borderColor: "brand.grey.30",
        border: "1px solid",
        cursor: "pointer",
    },
};

export const inputStyle = {
    height: "5.6rem",
    color: "brand.text.3",
    borderRadius: "0.8rem",
    borderColor: "brand.grey.30",
    fontWeight: "400",
    border: {
        base: "1px solid",
        md: "none",
    },
    _focus: {
        border: ["1px solid", "1px solid", "none"],
    },
};

export const inputContainerStyle = {
    display: {
        base: "grid",
        md: "flex",
    },
    border: {
        md: "1px solid",
    },
    borderRadius: "0.8rem",
    borderColor: "brand.grey.30",
    alignItems: "stretch",
};
