import React, { CSSProperties } from "react"

export function Footer(props : {
    footerLine?:String,
    Height?: number
    zIndex?: number
}){
    
    const { 
        footerLine,
        Height = 50,
        zIndex = 1
    } = props;

    const styles : {
        Footer: CSSProperties,
        F_area: CSSProperties,
        F_Front: CSSProperties,
    } = {
        Footer: {
            width: "100%",
            height: `${Height}px`,
            zIndex: `${zIndex}`,
            position: "fixed",
            bottom : "0"
            
        },
        F_area : {
            position: "relative",
            width : "100%",
            height: "inherit",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            zIndex: `${zIndex + 1}`,
        },
        F_Front : {
            fontWeight: 600,
            zIndex: `${zIndex + 3}`,
            background: "white",
            fontSize: "0.8em",
            color: "#7e7e7e",
            padding: "0px 20px"
        }
    };

    
    return (
        <div className="Footer" style={styles.Footer} >
            <div className="F-area" style={styles.F_area} >
                <div className="F-Front" style={styles.F_Front}>{ footerLine ? footerLine : "Made with 💗 from Gj"}</div>
            </div>
        </div>
    )
}