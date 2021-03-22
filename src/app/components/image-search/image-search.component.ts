import { Component, OnInit } from '@angular/core';
import { ImageSearchService } from '../../services/image-search.service';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css'],
})
export class ImageSearchComponent implements OnInit {
  searchData;
  perPage: any;
  data = [];
  
  constructor(private imageSearchService: ImageSearchService) {}

  ngOnInit(): void {}

  isImage(type: String): Boolean {
    return type.includes('image'.toLowerCase()) ? true : false;
  }

  search(): void {
    console.log(`search: ${this.searchData}`);
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
