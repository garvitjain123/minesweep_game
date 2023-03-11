import React, { CSSProperties } from "react"

export function Header(props : {
    headerLine?:String,
    Height?: number
    zIndex?: number
}){
    
    const { 
        headerLine,
        Height = 50,
        zIndex = 1
    } = props;

    const styles:{
        Header : CSSProperties
        H_area  : CSSProperties
        H_Back  : CSSProperties
        H_Front  : CSSProperties
    }= {
        Header: {
            width: "100%",
            height: `${Height}px`,
            zIndex: `${zIndex}`
        },
        H_area : {
            position: "relative",
            width : "100%",
            height: "inherit",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: `${zIndex + 1}`,
        },
        H_Back : {
            position: "absolute",
            border: "1px solid #E2E2E2",
            width: "100%",
            top: "50%",
            zIndex: `${zIndex + 2}`
        },
        H_Front : {
            fontWeight: 600,
            zIndex: `${zIndex + 3}`,
            background: "white",
            fontSize: "1.5em",
            color: "#7e7e7e",
            padding: "0px 20px"
        }
    };

    
    return (
        <div className="Header" style={styles.Header}>
            <div className="H-area" style={styles.H_area}>
                <div className="H-Back" style={styles.H_Back}></div>
                <div className="H-Front" style={styles.H_Front}>{ headerLine ? headerLine : "Minesweep Game"}</div>
            </div>
        </div>
    )
}