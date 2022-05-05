import { CardState } from "../enums/card-state";
import { CardType } from "../enums/card-type";
import { Match } from "../match/match";
import { User } from "../user/user";

export class Card {

    constructor(
        public id?: number,
        public match?: Match,
        public owner?: User,
        public cardType?: CardType,
        public cardState?: CardState,) {}
}
