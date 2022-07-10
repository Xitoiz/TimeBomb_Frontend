import { Component, OnInit } from '@angular/core';
import { MatchResult } from 'src/app/model/match-result';
import { MatchResultService } from 'src/app/service/match-result.service';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {


    public matchResultList: Array<MatchResult> = new Array<MatchResult>();

    constructor(private srvMatchResult: MatchResultService) { }

    ngOnInit(): void {
        this.getAllMatchResult();
    }

    public getAllMatchResult() {
        (this.srvMatchResult.getAllMatchResult())
            .subscribe(response => {
                this.matchResultList = response;
            });
    }

}
