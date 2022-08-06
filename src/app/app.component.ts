import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  centerText = "This is the home page"

  ngOnInit(){
    setInterval(()=>this.centerText+=" page", 100)
  }
}
