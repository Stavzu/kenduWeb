import React from "react";
import Link from "next/link";

export const ActiveLink = ({
    children,
    activeLink,
    shallow,
    href,
}: {
    children: React.ReactNode;
    activeLink: boolean;
    shallow?: boolean;
    href: string;
}) => {
    return (
        <Link
            color={activeLink ? "brand.orange.1" : ""}
            as={href}
            shallow={shallow}
            href={href}
        >
            {children}
        </Link>
    );
};
