import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { MatchResultService } from 'src/app/service/match-result.service';

@Component({
    selector: 'app-classements',
    templateUrl: './classements.component.html',
    styleUrls: ['./classements.component.css']
})
export class ClassementsComponent implements OnInit {

    public tableClassement: Array<Object> = [];;

    constructor(
        private srvMatchResult: MatchResultService
    ) {}

    ngOnInit(): void {
        this.initialisationTableau();
    }

    public async initialisationTableau() {
        await lastValueFrom(this.srvMatchResult.classement())
            .then( table => {
                this.constructionTableClassement(table);
            })
    }

    private constructionTableClassement(table: Array<Object>) {
        let index_table: number = 0;
        let index_classemnt: number = 0;
        let pseudo: string = "";

        let SherlockWin: number = 0;
        let SherlockLoose: number = 0;
        let moriartyWin: number = 0;
        let moriartyLoose: number = 0;

        while (index_table < table.length) {

            if (table[index_table][1] == "Winner" && table[index_table][2] == "SHERLOCK") {SherlockWin =+ table[index_table][0]}
            else if (table[index_table][1] == "Looser" && table[index_table][2] == "SHERLOCK") {SherlockLoose =+ table[index_table][0]}
            else if (table[index_table][1] == "Winner" && table[index_table][2] == "MORIARTY") {moriartyWin =+ table[index_table][0]}
            else if (table[index_table][1] == "Looser" && table[index_table][2] == "MORIARTY") {moriartyLoose =+ table[index_table][0]}

            index_table = index_table + 1;

            if (index_table > table.length -1 || table[index_table - 1][3] != table[index_table][3]) {

                pseudo = table[index_table - 1][4];

                let list: Array<Object> = [];
                list = this.constructionElementTableClassement(pseudo, SherlockWin, SherlockLoose, moriartyWin, moriartyLoose);

                this.tableClassement.push(list);

                index_classemnt = index_classemnt + 1;

                SherlockWin = 0;
                SherlockLoose = 0;
                moriartyWin = 0;
                moriartyLoose = 0;
            }
        }
        this.sort(9);
    }

    public sort(index: number) {
        if (index > 0 && index < 10) {
            this.tableClassement = this.tableClassement.sort( (a, b) => b[index] - a[index])
        }
    }

    private constructionElementTableClassement(pseudo: string, SherlockWin: number, SherlockLoose: number, moriartyWin: number, moriartyLoose: number) {
        let list: Array<Object> = [];

        list.push(pseudo);
        list.push(SherlockWin + moriartyWin);
        list.push(SherlockLoose + moriartyLoose);
        list.push((SherlockWin + moriartyWin) / (SherlockWin + moriartyWin + SherlockLoose + moriartyLoose));
        list.push(SherlockWin);
        list.push(SherlockLoose);
        (SherlockWin + SherlockLoose == 0) ? list.push(0) : list.push(SherlockWin / (SherlockWin + SherlockLoose));
        list.push(moriartyWin);
        list.push(moriartyLoose);
        (moriartyWin + moriartyLoose == 0) ? list.push(0) : list.push(moriartyWin / (moriartyWin + moriartyLoose));

        return list
    }

}
