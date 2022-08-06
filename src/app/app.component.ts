import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  centerText: string = "Oh no, what's happening? I'm sinking. Someone help me from the monster"
  buttonMessage: string = "Save from Monster"
  ngOnInit(){
    setInterval(this.testNonsense, 100)
  }

  testNonsense = () => {
    return this.centerText = this.centerText.slice(1) + " om nom"
  }

  click() {
    clearInterval(1)
    this.centerText = "YOU CANNOT SAVE ROBERT"
    this.buttonMessage = "Oh Ok. RIP Mr. Tables."
  }
}
