import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue: string = '';
  changeSearchValue(eventData: any) {
    // console.log(eventData.target.value);
    this.searchValue = eventData.target.value;
  }
}
