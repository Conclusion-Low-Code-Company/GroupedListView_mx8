import React, { createElement } from "react";

export default function EmptyMessage(props) {
    if (!props.emptyMessage) {
        return null;
    } else {
        return (
            <div name={props.name} style={props.style} className={"glv mx-listview " + props.class}>
                <div className="glv_empty-message">{props.emptyMessage}</div>
            </div>
        );
    }
}
