import React, { createElement } from "react";

export default function AlertMessage(props) {
    return <div className={`alert alert-${props.type}`}>{props.content}</div>;
}
