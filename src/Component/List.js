import React from "react";

const ListItem = props =>{
    const value = props.value;
    return(<li>{value}</li>);

}

export const List = ({ item }) =>{
    return (
        <ul>{item.map(item =><ListItem key={item.toString()} value={item} />)}</ul>
    )
}