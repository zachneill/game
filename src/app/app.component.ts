import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  centerText: string = "Test center text"
  buttonMessage: string = "Test button"
  ngOnInit(){
    setInterval(this.testNonsense, 100)
  }

  testNonsense = () => {
    return this.centerText = this.centerText.slice(1) + " test"
  }

  click() {
    clearInterval(1)
    this.centerText = "TEST"
    this.buttonMessage = "Test."
  }
}
