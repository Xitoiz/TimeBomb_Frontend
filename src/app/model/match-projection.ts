import { PlayerRole } from "../enums/player-role";
import { Match } from "./match";

export class MatchProjection {
    constructor(
        public match?: Match,
        public nbDiffuse?: number,
        public nbDiffuseLeft?: number,
        public isBombInHand?: boolean,
        public matchRole?: PlayerRole) {}
}

