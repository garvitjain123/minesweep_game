import React, { CSSProperties } from "react"
import { Button } from "./utils/Button"

import { generateMines, calculateMinesAroundAll} from "./utils/commons";

export function GameInitiateButtons(props : {
    generateMinesweep: Boolean,
    setMinesweep: Function,
    mines: Boolean[],
    setMines: Function,
    setMineHit: Function,
    statusRef : any,
    gridLength ?: number,
    gridHeight ?: number,
    mineCount ?: number
}){
    
    const {
        generateMinesweep,
        setMinesweep,
        setMines,
        mines,
        setMineHit,
        statusRef,
        gridLength = 4,
        gridHeight = 4,
        mineCount = 3,
    } = props;

    const styles: {
        initiateButtons: CSSProperties
    }= {
        initiateButtons: {
            display: "flex",
            width: "70%",
            margin: "0 auto",
            marginTop: "50px",
            flexDirection: "row",
            justifyContent : "space-around"
        }
    };

    const printMinesweepClick = () => {
        statusRef.current.innerText = generateMinesweep === false ? "Painted Blocks" : "Re-Painted Blocks"
        setMinesweep(true)
        setMineHit(false)
        setMines(Array(gridLength*gridHeight).fill(false))
    }

    const armMines = () =>{
        statusRef.current.innerText = "Armed Minesweep!"
        const mines = generateMines(gridLength*gridHeight , mineCount)
        console.log(mines)
        setMines(mines)
        setMineHit(false)
    }

    const solutionClickHandler = () => {
        statusRef.current.innerText = "Solution Printed!"
        const mineSol = calculateMinesAroundAll(mines, gridLength, gridHeight)
        setMineHit(true)
        setMines([...mineSol])
    }
    
    return (
        <div className="initiateButtons" style={styles.initiateButtons}>
            <Button buttonText= {!generateMinesweep ? "Print Minesweep" : "Disarm Mines"} backgroundColor="dimgrey" clickHandler={printMinesweepClick} />
            <Button buttonText="Arm Mines"  backgroundColor="limegreen" clickHandler={armMines} />
            <Button buttonText="Calculate Solution"  backgroundColor="orangered" clickHandler={solutionClickHandler} />
        </div>
    )
}