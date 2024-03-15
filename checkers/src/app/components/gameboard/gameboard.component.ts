import { Component } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent {

  board = [
    ['w', '', 'w', '', 'w', '', 'w', ''],
    ['', 'w', '', 'w', '', 'w', '', 'w'],
    ['w', '', 'w', '', 'w', '', 'w', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', 'b', '', 'b', '', 'b', '', 'b'],
    ['b', '', 'b', '', 'b', '', 'b', ''],
    ['', 'b', '', 'b', '', 'b', '', 'b'],
  ];


}
