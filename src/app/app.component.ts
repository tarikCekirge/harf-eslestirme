import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomParagraph = faker.lorem.paragraph();
  enteredText:String="";

  getInputValue(value:String){
    this.enteredText =value;
    console.log(this.randomParagraph.split(''))
  }
  compare(randomLetter:String,enteredLetter:String ){
    if(!enteredLetter){
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct':'incorrect'
  }
}


