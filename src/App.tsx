import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GameArea } from './components/GameArea';
import { GameInitiateButtons } from './components/GameInitiateButtons';
import { InputFields } from './components/InputFields';
import { useRef, useState } from 'react';

import { generateMines } from './components/utils/commons'
import React from 'react';

function App() {
  const gridCellDim = "80px"

  const [gridLength, setgridLength] = useState(4);
  const [gridHeight, setgridHeight] = useState(4);
  const [mineCount, setmineCount] = useState(2);

  const [ mineHit, setMineHit ] = useState(false)
  const [generateMinesweep, setMinesweep] = useState(false);
  const [mines, setMines] = useState(generateMines(gridHeight*gridLength , mineCount))

  const statusRef = useRef(null);

  return (
    <>
        <Header />
        <InputFields
          setMines={setMines}
          statusRef={statusRef}
          gridLength={gridLength}
          mineCount={mineCount}
          setgridLength={setgridLength}
          setgridHeight={setgridHeight}
          setmineCount={setmineCount}
          setMineHit={setMineHit}
        />

        <GameInitiateButtons 
          generateMinesweep={generateMinesweep} 
          setMinesweep={setMinesweep}
          mines={mines}
          setMines={setMines}
          gridLength={gridLength} 
          gridHeight={gridHeight} 
          mineCount={mineCount}
          setMineHit={setMineHit}
          statusRef={statusRef}
        />
        <div className="status" ref={statusRef}></div>
        {generateMinesweep && <GameArea 
                                gridLength={gridLength} 
                                gridHeight={gridHeight} 
                                mines={mines}
                                gridCellDim={gridCellDim}
                                setMines={setMines}
                                mineHit={mineHit}
                                setMineHit={setMineHit}
                                statusRef={statusRef}
                              />}

        <Footer />
    </>
  );
}

export default App;
