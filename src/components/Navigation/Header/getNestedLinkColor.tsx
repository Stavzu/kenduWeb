import React from "react";
import { INavigationData } from "../types";

export const getNestedLinkColor = ({
    locationPath,
    navigation,
}: {
    locationPath: string;
    navigation: INavigationData;
}): string => {
    const specificLink = ["/mentoring", "/akademie", "/meetupy"];
    const isLinkFromSubItem =
        specificLink.includes(locationPath) && navigation.id === 2;

    if (isLinkFromSubItem) {
        return "brand.orange.1";
    }
    if (locationPath === navigation.link) {
        return "brand.orange.1";
    }
    return "text.2";
};
