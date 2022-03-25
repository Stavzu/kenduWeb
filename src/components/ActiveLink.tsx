import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

export const ActiveLink = ({
    children,
    to,
}: {
    children: React.ReactNode;
    to: string;
}) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <ChakraLink
                as={Link}
                style={{ textDecoration: "none" }}
                color={match ? "brand.orange.1" : ""}
                to={to}
            >
                {children}
            </ChakraLink>
        </div>
    );
};
