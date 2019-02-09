import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  nameImage = 'Duc Anh';
  urlImage = 'https://www.youtube.com/embed/-U_vOjK_tD8';
  setNameImage(name) {
    this.nameImage = name;
  }
  setUrlImage(url) {
    this.urlImage = url;
  }
  constructor() { }

  ngOnInit() {
  }

}
