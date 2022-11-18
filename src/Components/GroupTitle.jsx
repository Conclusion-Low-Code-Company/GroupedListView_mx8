import React, { createElement } from "react";

export default function GroupTitle({ groupTitle, item, stickyGroupHeaders }) {
    return <li className={`glv__listHeader${stickyGroupHeaders ? " sticky" : ""}`}>{groupTitle(item)}</li>;
}
