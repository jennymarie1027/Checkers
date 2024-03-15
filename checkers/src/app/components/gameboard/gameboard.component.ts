import { Component } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent {
  board = [
    ['r', '', 'r', '', 'r', '', 'r', ''],
    ['', 'r', '', 'r', '', 'r', '', 'r'],
    ['r', '', 'r', '', 'r', '', 'r', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', 'b', '', 'b', '', 'b', '', 'b'],
    ['b', '', 'b', '', 'b', '', 'b', ''],
    ['', 'b', '', 'b', '', 'b', '', 'b'],
  ];

  
}
