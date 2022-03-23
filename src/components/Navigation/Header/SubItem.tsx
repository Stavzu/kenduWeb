import React from "react";
import { useResolvedPath, useMatch } from "react-router-dom";
import { ActiveLink } from "../../ActiveLink";

function SubItem({ subItem, children, to }: any) {
    const resolved = useResolvedPath(subItem.link);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
        <ActiveLink match={match} to={subItem.link}>
            {children}
        </ActiveLink>
    );
}

export default SubItem;
