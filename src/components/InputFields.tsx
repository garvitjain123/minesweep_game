import React, { CSSProperties, useRef } from "react";

import { generateMines } from "./utils/commons";

export function InputFields(props: {
    statusRef: any
    gridLength: number,
    mineCount: number,
    setMines: Function,
    setgridLength: Function,
    setgridHeight: Function,
    setmineCount: Function,
    setMineHit: Function,
}) {
    
    const {
        statusRef,
        setMines,
        mineCount,
        setgridLength,
        setgridHeight,
        setmineCount,
        setMineHit,
    } = props;

    const minGrid = 2;
    const maxGrid = 10;

    const gridRef = useRef(null)
    const mineRef = useRef(null)

    const gridChangeHandler = (e: any) => {

        let value = e.target.valueAsNumber

        if(isNaN(value)){
            return
        }

        if(value < minGrid) {
            value = minGrid;
            statusRef.current.innerText = `Please choose a value between ${minGrid} and ${maxGrid}`
        } else if(value > maxGrid){
            value = maxGrid;
        }
        
        mineRef.current.value=minGrid
        setmineCount(minGrid)
        setMines(generateMines(value*value, parseInt(mineRef.current.value)))
        setgridHeight(value)
        setgridLength(value)
        setMineHit(false)

        e.target.value = value;
    }

    const mineChangehandler = (e: any) => {
        const value = e.target.valueAsNumber;
        if(isNaN(value)){
            return
        }
        const maxValue = (parseInt(gridRef.current.value)) * (parseInt(gridRef.current.value))
        if(value <  minGrid || value >= maxValue){
            statusRef.current.innerText = `Please choose mines between ${minGrid} and ${maxValue}.`
        } else{
            const gridCount = isNaN(gridRef.current.value) ? minGrid: gridRef.current.valueAsNumber
            setmineCount(value)
            setgridHeight(gridCount)
            setgridLength( gridCount)
            setMines(generateMines(gridCount*gridCount, parseInt(mineRef.current.value)))
            setMineHit(false)
        }
    }

    const styles : {
        inputStyles: CSSProperties,
        input: CSSProperties,
    } = {
        inputStyles: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            fontSize: "1.2em",
            fontWeight: "200",
        },
        input: {
            textDecoration: "none",
            textAlign: "center",
            fontSize: "1em",
        }
    }

    return (
        <div className="inputFields" style={styles.inputStyles}>
            <div>
                <label htmlFor="dimensions">Grid Dimensions : </label>
                <input ref={gridRef} onChange={gridChangeHandler} style={styles.input} name="dimensions" type="number" defaultValue={3} min={minGrid} max={maxGrid}/>
            </div>

            <div>
                <label htmlFor="mineCount">Number of Mines : </label>
                <input ref={mineRef} style={styles.input} onChange={mineChangehandler} name="mineCount" defaultValue={mineCount} min={minGrid} type="number"/>
            </div>

        </div>
    )

}