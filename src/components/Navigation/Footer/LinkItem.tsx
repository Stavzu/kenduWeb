import { ListItem, Link } from "@chakra-ui/react";
import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";

function LinkItem({ children, link, isLinkExternal }: any) {
    const isDesktop = useMediaQuery("(min-width: 48em)");
    return (
        <ListItem
            fontSize={isDesktop ? "13px" : "16px"}
            lineHeight={isDesktop ? "21px" : "26px"}
            fontWeight="400"
            maxW={isDesktop ? "90px" : undefined}
            mb={isDesktop ? "12px" : "16px"}
            color="brand.text.2"
            _hover={{
                color: "brand.orange.1",
                cursor: "pointer",
            }}
        >
            <Link
                href={link}
                isExternal={isLinkExternal}
                _hover={{
                    textDecoration: "none",
                }}
            >
                {children}
            </Link>
        </ListItem>
    );
}

export default LinkItem;
