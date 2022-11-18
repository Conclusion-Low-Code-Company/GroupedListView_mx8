import React, { createElement } from "react";
import GroupTitle from "./GroupTitle";
import ListItem from "./ListItem";

export default function GroupedList(props) {
    let lastKnownGroupId = "";

    return (
        <div name={props.name} style={props.style} className={"glv mx-listview " + props.class}>
            <ul className="glv__list">
                {props.inputList.items.map(item => {
                    if (props.groupId(item).value !== lastKnownGroupId) {
                        lastKnownGroupId = props.groupId(item).value;
                        return (
                            <>
                                <GroupTitle
                                    groupTitle={props.groupTitle}
                                    item={item}
                                    stickyGroupHeaders={props.stickyGroupHeaders}
                                    key={"gt" + item.mxId}
                                />
                                <ListItem
                                    widget={props.widget}
                                    item={item}
                                    listItemClick={props.listItemClick}
                                    key={item.mxId}
                                />
                            </>
                        );
                    }
                    return (
                        <ListItem
                            widget={props.widget}
                            item={item}
                            listItemClick={props.listItemClick}
                            key={item.mxId}
                        />
                    );
                })}
            </ul>
        </div>
    );
}
