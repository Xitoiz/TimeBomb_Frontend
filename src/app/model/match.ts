import { MatchState } from "../enums/match-state";
import { PlayerRole } from "../enums/player-role";
import { Card } from "./card";
import { User } from "./user";

export class Match {

    constructor(
        public id?: number,
        public name?: string,
        public state?: MatchState,
        public cardList?: Array<Card>,
        public playerList?: Array<User>,
        public lastPlayer?: User,
        public currentPlayer?: User,
        public winnerRole?: PlayerRole) {}
}
