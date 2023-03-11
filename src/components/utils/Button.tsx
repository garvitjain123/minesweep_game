import React, { CSSProperties, MouseEventHandler } from "react"


export function Button(props: {
    buttonText : string,
    backgroundColor: string,
    clickHandler: MouseEventHandler
}): JSX.Element{
    
    const {
        buttonText,
        backgroundColor,
        clickHandler,
    } = props;

    const styles: {
        buttonStyles: CSSProperties
    } = {
        buttonStyles: {
            backgroundColor: backgroundColor,
            textAlign: "center",
            fontWeight: "700",
            padding: "20px",
            border: "0",
            color: "white",
            borderRadius: "5px",
            boxShadow: "2px 2px 3px black",
            fontSize: "1.1em"
        }
    };

    return (
        <button id="buttong" className="buttong" onClick={clickHandler} style={styles.buttonStyles}>{buttonText}</button>
    )
}