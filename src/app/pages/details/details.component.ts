import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() data: any;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log('data: ', this.data);
  }

  isImage(type: String, e): Boolean {
    e.stopPropagation();
    e.preventDefault();
    console.log(`type: ${type}`);
    return type.includes('image'.toLowerCase()) ? true : false;
  }

}
