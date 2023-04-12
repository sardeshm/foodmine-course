import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchTerm = '';

  constructor(acttivatedRoute: ActivatedRoute, private router: Router) {
    acttivatedRoute.params.subscribe((params) => {
      if (params.searchTerm) this.searchTerm = params.searchTerm;
    });
  }
  ngOnInit(): void {}

  search(term: string): void {
    if (term) this.router.navigateByUrl('/search/' + term);
  }
}
