import { PlayerRole } from "../enums/player-role";
import { User } from "./user";

export class MatchResult {

    constructor(
        public id?: number,
        public winnerRole ?: PlayerRole,
        public winners ?: Array<User>,
        public loosers ?: Array<User>,
        public winCondition ?: String
    ) {}
}
