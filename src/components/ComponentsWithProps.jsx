import React from "react";

const ComponentsWithProps = props => {
    const {headerText,footerText}=props
    return(
        <div>
        <h3>{props.headerText}</h3>
        <h3>{footerText}</h3>
        </div>
    )
}
export default ComponentsWithProps