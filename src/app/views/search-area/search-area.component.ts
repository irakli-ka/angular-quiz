import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../services/search.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrl: './search-area.component.css',
})
export class SearchAreaComponent {
  
  @Output() SearchFormSubmitEvent:EventEmitter<any> = new EventEmitter();


  constructor(private searchService: SearchService) {}
  
  onSearch(form:NgForm) {
    this.searchService.getMovie(form.value.title).subscribe((response) => {
      console.log(response);
      this.SearchFormSubmitEvent.emit(response);
    });
  }


  
}
