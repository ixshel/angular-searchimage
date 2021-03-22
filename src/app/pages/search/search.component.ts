import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageSearchService } from 'src/app/services/image-search.service';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchData;
  perPage: any;
  data = [];
  
  constructor(private imageSearchService: ImageSearchService, private modalService: NgbModal) {}

  ngOnInit(): void {}

  isImage(type: String): Boolean {
    return type.includes('image'.toLowerCase()) ? true : false;
  }

  show_details(ele: any) {
    ele.images.forEach(image => {
      image.isImage = image.type.includes('image'.toLowerCase()) ? true : false;
    });
    const modalRef = this.modalService.open(DetailsComponent, { scrollable: true, centered: true, size: 'xl' });
      modalRef.componentInstance.data = ele;
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
