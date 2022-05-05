import { Card } from "../card/card";
import { MatchState } from "../enums/match-state";
import { PlayerRole } from "../enums/player-role";
import { User } from "../user/user";

export class Match {

    constructor(
        public id?: number,
        public name?: string,
        public mtchState?: MatchState,
        public cardList?: Array<Card>,
        public playerList?: Array<User>,
        public lastPlayer?: User,
        public currentPlayer?: User,
        public winnerRole?: PlayerRole) {}
}
