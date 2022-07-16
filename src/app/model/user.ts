import { AccountType } from "../enums/account-type";

export class User {

    constructor(
        public id?: number,
        public pseudo?: string,
        public login?: string,
        public password?: string,
        public accountType?: AccountType,
        ) {}
}
