import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charades',
  templateUrl: './charades.component.html',
  styleUrls: ['./charades.component.css']
})


export class CharadesComponent implements OnInit {

  charadesWord: any;

  charadesWords = [
    { theWord: "Coccyx", clue: "Anatomy" },
{ theWord: "Ballpark", clue: "Sport" },
{ theWord: "Cocktail", clue: "Food and Drink" },
{ theWord: "Sextant", clue: "Item" },
{ theWord: "Dogleg", clue: "Cartography" },
{ theWord: "Sackbut", clue: "Musical Instrument" },
{ theWord: "Cupboard", clue: "Household" },
{ theWord: "Bagpipe", clue: "Musical Instrument" },
{ theWord: "Muffin", clue: "Food and Drink" },
{ theWord: "Football", clue: "Sport" },
{ theWord: "Hero", clue: "People" },
{ theWord: "Sandwich", clue: "Food and Drink" },
{ theWord: "Booger", clue: "Anatomy" },
{ theWord: "Window", clue: "Household" },
{ theWord: "Picnic", clue: "Food and Drink" },
{ theWord: "Doughnut", clue: "Food and Drink" },
{ theWord: "Keyboard", clue: "Household" },
{ theWord: "Carpet", clue: "Household" },
{ theWord: "Lotion", clue: "Household" },
{ theWord: "Potion", clue: "Household" },
{ theWord: "Fingers", clue: "Anatomy" },
{ theWord: "Cowboy", clue: "Occupation" },
{ theWord: "Headphones", clue: "Household" },
{ theWord: "Needle", clue: "Household" },
{ theWord: "Candle", clue: "Household" },
{ theWord: "Music", clue: "Entertainment" },
{ theWord: "Nothing", clue: "Abstract" },
{ theWord: "Wisdom", clue: "Abstract" },
{ theWord: "Tiny", clue: "Abstract" },
{ theWord: "Netball", clue: "Sport" },
{ theWord: "Random", clue: "Abstract" },
{ theWord: "Fancy", clue: "Abstract" },
{ theWord: "Address", clue: "Cartography" },
{ theWord: "Solo", clue: "Abstract" },
{ theWord: "Hipster", clue: "People" },
{ theWord: "Frozen", clue: "Abstract" },
{ theWord: "Tennis", clue: "Sport" },
{ theWord: "Catfish", clue: "Nature" },
{ theWord: "Rainbow", clue: "Nature" },
{ theWord: "People", clue: "Nature" },
{ theWord: "Human", clue: "Nature" },
{ theWord: "Apple", clue: "Food and Drink" },
{ theWord: "Dragon", clue: "Nature" },
{ theWord: "Donkey", clue: "Nature" },
{ theWord: "Roman", clue: "People" },
{ theWord: "Number", clue: "Abstract" },
{ theWord: "Rhino", clue: "Nature" },
{ theWord: "Planet", clue: "Nature" },
{ theWord: "Arctic", clue: "Cartography" },
{ theWord: "Bumble", clue: "Verb" },
{ theWord: "Forswear", clue: "Verb" },
{ theWord: "Moonwalk", clue: "Verb" },
{ theWord: "Open", clue: "Verb" },
{ theWord: "Wonder", clue: "Verb" },
{ theWord: "Dancing", clue: "Verb" },
{ theWord: "Sentence", clue: "Verb" },
{ theWord: "Jingle", clue: "Verb" },
{ theWord: "Workout", clue: "Verb" },
{ theWord: "Forget", clue: "Verb" },
{ theWord: "Record", clue: "Verb" },

  ];

  constructor() { }

  ngOnInit(): void {
  }

  generateWord(): void {
    this.charadesWord = this.charadesWords[Math.floor(Math.random() * this.charadesWords.length)];
  }

}

class CharadesWord {
  theWord: any;
  clue: any;
}