
export function generateMines(gridCellsCount: number, mines: number) {

    let minesArray = Array(gridCellsCount).fill(false);

    for (let i = 0; i < mines; ) {
        let mineIndex = Math.floor(Math.random() * (gridCellsCount))
        if(minesArray[mineIndex] === true){
            continue;
        }else{
            minesArray[mineIndex] = true;
            i += 1
        }
    }

    return minesArray
    
}

export function calculateMinesAroundAll(mines: (Boolean | number)[], gridLength: number, gridHeight: number) : (Boolean | number)[]{

    for(let i = 0 ; i < gridLength*gridLength ; i++){
        if(!mines[i]){
            mines[i] = calculateMinesAround(mines, gridLength, gridHeight, i)
        }
    }

    return mines
}

export function calculateMinesAround(mines: (Boolean | number)[], gridLength: number, gridHeight: number, index: number): number{
    

    const indexToCordinates = (i: number): {x:number, y:number} => {
        let x = Math.floor(i/gridLength);
        let y = (i % gridLength);
        return {x, y}
    }

    const cordinatesToIndex = (x: number, y: number, gridLengtht: number, gridHeight: number): number | Boolean=> {
        if(x < 0 || y < 0){
            return false
        }
        if(x >= gridLength || y >= gridHeight){
            return false
        }

        let index =x*gridLength + (y + 1);

        return index
    }

    const {x, y} = indexToCordinates(index)
    let minesAround = 0

    const calculateVertical = (mines: (Boolean | number)[], x: number, y: number) => {
        let minesCount = 0;
        let up = cordinatesToIndex(x - 1, y,gridLength,gridHeight)
        let down = cordinatesToIndex(x + 1, y,gridLength,gridHeight)
        if( up && mines[up as number - 1] === true) {
            minesCount +=1;
        }
        if( down && mines[down as number - 1]  === true) {
            minesCount +=1;
        }
        return minesCount;
    }

    const calculateHorizontal = (mines: (Boolean | number)[], x: number, y: number) => {
        let minesCount = 0;
        let left = cordinatesToIndex(x , y - 1,gridLength, gridHeight)
        let right = cordinatesToIndex(x ,y + 1,gridLength, gridHeight)
        if( left && mines[left as number - 1]  === true) {
            minesCount +=1
        }
        if( right && mines[right as number - 1]  === true) {
            minesCount +=1
        }
        return minesCount;
    }

    const calculateDiagBack = (mines: (Boolean | number)[], x: number, y: number) => {
        let minesCount = 0;
        let leftUp = cordinatesToIndex(x - 1 , y - 1,gridLength, gridHeight)
        let leftdown = cordinatesToIndex(x + 1 , y - 1 ,gridLength, gridHeight)
        if( leftUp && mines[leftUp as number - 1]  === true) {
            minesCount +=1
        }
        if( leftdown && mines[leftdown as number - 1]  === true) {
            minesCount +=1
        }
        return minesCount;
    }

    const calculateDiagForw = (mines: (Boolean | number)[], x: number, y: number) => {
        let minesCount = 0;
        let rightUp = cordinatesToIndex(x - 1, y + 1, gridLength, gridHeight)
        let rightdown = cordinatesToIndex(x + 1, y + 1 , gridLength, gridHeight)
        if( rightUp && mines[rightUp as number - 1]  === true) {
            minesCount +=1
        }
        if( rightdown && mines[rightdown as number - 1]  === true) {
            minesCount +=1
        }
        return minesCount;
    }

    minesAround =  calculateHorizontal(mines, x , y) + calculateVertical(mines, x , y) + calculateDiagForw(mines, x , y) + calculateDiagBack(mines, x , y)

    return minesAround
}