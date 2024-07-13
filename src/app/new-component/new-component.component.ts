import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  inputValue : string = ''
  showBox : boolean = false
  boxNumber : number = 3
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      this.scrollToFragment(fragment);
    });
  }

  scrollToFragment(fragment: string | null) {
    if (fragment) {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  showAndHidebox()
  {
    this.showBox = !this.showBox
    if(this.boxNumber == 3)
      this.boxNumber = 4
    else
      this.boxNumber = 3

  }

}
