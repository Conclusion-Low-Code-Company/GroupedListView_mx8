import React, { createElement } from "react"; // include React for using Fragments
import AlertMessage from "./Components/AlertMessage";
import EmptyMessage from "./Components/EmptyMessage";
import GroupedList from "./Components/GroupedList";

import "./ui/GroupedListView.css";

export default function GroupedListView(props) {
    // if there is no list input, return alert
    if (!props.inputList.items) {
        return <AlertMessage type={"danger"} content={"GroupedListView: Input list undefined."} />;
    }

    // if the list is empty, show (custom) empty message
    if (props.inputList.items.length < 1) {
        return <EmptyMessage {...props} />;
    }
    // show the grouped list
    return <GroupedList {...props} />;
}
