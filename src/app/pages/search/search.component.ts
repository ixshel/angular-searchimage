import { Component, OnInit } from '@angular/core';
import { ImageSearchService } from 'src/app/services/image-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchData;
  perPage: any;
  data = [];
  
  constructor(private imageSearchService: ImageSearchService) {}

  ngOnInit(): void {}

  isImage(type: String): Boolean {
    return type.includes('image'.toLowerCase()) ? true : false;
  }

  search(): void {
    this.imageSearchService
      .getdata(this.searchData, null, null, null)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.data = response.data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
