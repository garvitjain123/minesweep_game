import React from "react"

import { calculateMinesAround, calculateMinesAroundAll } from "./utils/commons";

export function GameArea(props : {
    mines:(Boolean|number)[],
    setMines: Function,
    mineHit: Boolean,
    setMineHit: Function,
    statusRef : any,
    gridLength ?: number,
    gridHeight ?: number,
    gridCellDim ?: string,
}){
    
    const {
        mines,
        setMines,
        mineHit,
        setMineHit,
        statusRef,
        gridLength = 4,
        gridHeight = 4,
        gridCellDim = "80px",
    } = props;

    const styles = {
        gameArea: {
            width: "100%",
            height: "100%",
            padding: "5% 7%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        gridContainer: {
            // width: "300px",
            // height: "300px",
            display: "grid",
            gap: "1px",
            gridTemplateColumns: `${gridCellDim} `.repeat(gridLength)
        },
        gridCell: {
            border: "2px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "600",
            fontSize: "2em",
            height: `${gridCellDim}`
        }
    };

    const cellClickHandler = (e : any) => {

        const index = parseInt(e.target.dataset.index)

        if(mines[index] === true){
            const message = "You have hit an mine! Try arming the squares again!"

            console.log(message)
            statusRef.current.innerText = message

            const mineSol = calculateMinesAroundAll(mines, gridLength, gridHeight)
            setMines([...mineSol])
            setMineHit(true)

        } else if(mines[index] === false){

            let minesNear = calculateMinesAround(mines, gridLength, gridHeight, index)
            mines[index] = minesNear;
            setMines([...mines])

            const remaining = mines.some((index) => {
                return index === false
            })

            if(remaining === false) {
                setMineHit(true)

                const message = "You won!! Congrats!";

                console.log(message)
                statusRef.current.innerText = message
            }

        } else{
            console.log("already calculated the mines near")
        }
        
    }

    const getGrid = (x: number, y: number, mines: (Boolean | number)[]) => {
        const rows: JSX.Element[] = [];
        for(let i = 0 ; i < x * y ; i++) {
            let content : string | null = typeof mines[i] !== `boolean` ? mines[i].toString() : mineHit === true ? "x" : null; 
            rows.push(
                <div key={`${i}`} onClick={cellClickHandler} data-index={i} className={`gridCell ${ mines[i] !== false ? "filled": "empty"}`} style={styles.gridCell}>{content}</div>
            )
        }
        return rows
    }
    
    return (
        <div className="gameArea" style={styles.gameArea}>
            <div className="gridContainer" style={styles.gridContainer}>
                {getGrid(gridLength, gridHeight, mines)}
            </div>
        </div>
    )
}