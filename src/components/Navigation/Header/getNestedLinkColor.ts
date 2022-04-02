import { INavigationData } from "../types";
import { subItemsLink } from "./HeaderItem";

export const getNestedLinkColor = ({
    activeUrl,
    navigation,
}: {
    activeUrl: string;
    navigation: INavigationData;
}): string => {
    const isLinkFromSubItem =
        subItemsLink.includes(activeUrl) && navigation.id === 2;

    if (isLinkFromSubItem || activeUrl === navigation.link) {
        return "brand.orange.1";
    }

    return "brand.text.2";
};
