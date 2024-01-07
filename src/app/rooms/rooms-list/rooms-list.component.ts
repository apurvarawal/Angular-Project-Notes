import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, DoCheck{

  @Input() rooms : RoomList[] = [];

  @Input() title : string = ''; 

  @Output() selectedRoom = new EventEmitter<RoomList>();
  constructor(){ }
  ngOnInit(): void {
      
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);

    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngDoCheck(): void {
      console.log('On Changes is called.')
  }

  selectRoom(room : RoomList){
    this.selectedRoom.emit(room);
  }
}
