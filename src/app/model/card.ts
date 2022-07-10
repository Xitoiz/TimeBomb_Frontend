import { CardState } from "../enums/card-state";
import { CardType } from "../enums/card-type";
import { Match } from "./match";
import { User } from "./user";

export class Card {

    constructor(
        public id?: number,
        public match?: Match,
        public owner?: User,
        public type?: CardType,
        public state?: CardState) {}
}
