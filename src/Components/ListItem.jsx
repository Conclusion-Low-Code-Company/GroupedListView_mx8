import React, { createElement } from "react";

export default function ListItem({ widget, item, listItemClick }) {
    const clickHandler = () => {
        const actionOnObject = listItemClick(item);
        if (actionOnObject.canExecute && !actionOnObject.isExecuting) {
            actionOnObject.execute();
        }
    };
    return (
        <li className={`glv__listItem${listItemClick ? " link" : ""}`} onClick={clickHandler}>
            {widget(item)}
        </li>
    );
}
