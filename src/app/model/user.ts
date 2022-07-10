import { AccountType } from "../enums/account-type";
import { PlayerRole } from "../enums/player-role";
import { Match } from "./match";

export class User {

    constructor(
        public id?: number,
        public pseudo?: string,
        public login?: string,
        public password?: string,
        public accountType?: AccountType,
        public currentMatch?: Match,
        public playerRole?: PlayerRole) {}
}
