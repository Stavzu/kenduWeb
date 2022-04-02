export const HeaderStyle = (isOpenNav: boolean) => ({
    w: "100%",
    zIndex: "10",
    top: "0",
    position: "fixed",
    display: { base: "grid", lg: "flex" },
    justifyContent: { lg: "space-between" },
    height: { base: isOpenNav ? "100vh" : "6.4rem", lg: "8.5rem" },
    bg: {
        base: isOpenNav ? "#D7D7D7" : "transparent",
        lg: "white",
    },
});

export const HeaderBoxStyle = (isOpenNav: boolean) => ({
    position: "absolute",
    top: "0",
    w: "100%",
    alignItems: "center",
    display: { base: "block", md: "block", lg: "flex" },
    height: { base: isOpenNav ? "100vh" : "6.4rem", lg: "8.7rem" },
    justifyContent: { lg: "space-between" },
    px: { lg: "4rem" },
});

export const HeaderLineStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    bg: "white",
    height: { base: "6.4rem", lg: "8.8rem" },
    px: { base: "2.4rem", lg: "0" },
};

export const HeaderLinks = {
    alignItems: "center",
    bg: "white",
    display: { base: "grid", lg: "flex" },
    justifyContent: { md: "center", lg: "space-between" },
    py: { md: "3rem", lg: "0" },
};
