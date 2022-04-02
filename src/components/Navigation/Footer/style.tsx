export const FooterContainerStyle = {
    my: {
        base: "4rem",
        md: "10rem",
        xl: "22.4rem",
    },
    mt: {
        base: "12rem",
        md: undefined,
    },
    mb: {
        base: "4rem",
        md: undefined,
    },
};

export const FooterGridStyle = {
    templateRows: {
        base: "auto auto auto",
        md: "repeat(2, 1fr)",
        xl: "1fr",
    },
    templateColumns: {
        base: "1fr",
        lg: "repeat(5, 1fr)",
    },
};

export const CompanyNameStyle = {
    fontSize: "xs",
    color: "brand.text.3",
    mt: {
        md: "2rem",
        lg: "4.6rem",
    },
    display: {
        base: "none",
        md: "flex",
    },
};

export const LinkItemStyle = ({ isDesktop }: { isDesktop: boolean }) => ({
    fontSize: isDesktop ? "1.4rem" : "1.6rem",
    lineHeight: isDesktop ? "2.1rem" : "2.6rem",
    fontWeight: "400",
    maxW: isDesktop ? "9rem" : undefined,
    mb: isDesktop ? "1.2rem" : "1.6rem",
    color: "brand.text.2",
    _hover: {
        color: "brand.orange.1",
        cursor: "pointer",
    },
});

export const NewsletterGridStyle = {
    rowSpan: { base: 1, md: 2, lg: 2 },
    colSpan: {
        base: 1,
        md: 5,
        lg: 2,
    },
    mt: {
        md: "3rem",
        xl: "0",
    },
};
