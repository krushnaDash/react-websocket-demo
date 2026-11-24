import React from "react";

const ListComponent= () => {
    const itemArray= [
        'Item1',
        'Item2',
        'Item3'
    ];

    const listItems=itemArray.map( (item, index) => <li key={index}>{item}</li> );

    return (
        <div>
            <ol>
                {itemArray.map( item=> <li>{item}</li>)}
            </ol>
            <ul>
              {listItems}
            </ul>
        </div>
    );
}
export default ListComponent