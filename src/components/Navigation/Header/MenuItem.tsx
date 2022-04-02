import React, { FC } from "react";
import Link from "next/link";
import { IMenuItem } from "../types";

export const MenuItem: FC<IMenuItem> = ({
    children,
    navigation,
    activeUrl,
}) => {
    const isNavigationLinkActive = activeUrl == navigation.link;
    if (navigation.link) {
        return (
            <Link
                color={isNavigationLinkActive ? "brand.orange.1" : ""}
                href={navigation.link}
            >
                {children}
            </Link>
        );
    }
    return <>{children}</>;
};
