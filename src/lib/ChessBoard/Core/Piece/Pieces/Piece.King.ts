import type { IPiece } from "../Piece"
import type { colorTable } from "../enum/Color.table.enum";
import { pieceTable } from "../enum/Pieces.table.enum";

class King implements IPiece {
    pieceData: pieceTable;
    pieceColor: colorTable; 
    location: string;

    constructor(color : colorTable,location : string) {
        this.pieceData = pieceTable.King;
        this.pieceColor = color;    
        this.location = location;
    }

    movePiece(move: string): void {
        throw new Error("Method not implemented.");
    }
    legalMoves(): string[] {
        throw new Error("Method not implemented.");
    }

}

export default King;