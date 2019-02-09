import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

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
