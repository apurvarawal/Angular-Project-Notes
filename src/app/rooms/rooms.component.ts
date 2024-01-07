import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList} from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit, AfterViewInit {

  hotelName = 'Hilton Hotel';
  NumberOfRooms = 30;
  hiderooms = false;
  rooms : Room = {
    totalRooms : 15,
    availableRooms : 10,
    bookedRooms : 5
  }

  title = "Room List"
  toggle(){
    this.hiderooms = !this.hiderooms;
    this.title = "Rooms List";
  }

  selectRoom(room : RoomList){
    console.log(room);
  }

  addRoom(){
    const room : RoomList = {
      roomNumber : 4,
      roomType :'Deluxe Room',
      amenities : 'AC, WiFi, TV, Bathroom, Kitchen',
      price : 6000,
      photos : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Finterior-design&psig=AOvVaw1cRcsk2s34Zr0H5TjwiA7r&ust=1704472065755000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCMiHyLGTxIMDFQAAAAAdAAAAABAE',
      checkinTime : new Date(11-12-2023),
      checkoutTime : new Date(13-12-2023),
      rating : 5
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }

  roomList : RoomList[] = []

  @ViewChild(HeaderComponent) headerComponent !: HeaderComponent;
  
  constructor(){ }

  ngAfterViewInit(): void {
      this.headerComponent.title = "Room View";
  }

  ngOnInit() : void{
    // console.log(this.headerComponent);
    this.roomList = [{
      roomNumber : 1,
      roomType :'Deluxe Room',
      amenities : 'AC, WiFi, TV, Bathroom, Kitchen',
      price : 1000,
      photos : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Finterior-design&psig=AOvVaw1cRcsk2s34Zr0H5TjwiA7r&ust=1704472065755000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCMiHyLGTxIMDFQAAAAAdAAAAABAE',
      checkinTime : new Date(11-12-2023),
      checkoutTime : new Date(13-12-2023),
      rating : 3.24532
    },
    {
      roomNumber : 2,
      roomType :'Deluxe Room2',
      amenities : 'AC, WiFi, TV, Bathroom, Kitchen',
      price : 1000,
      photos : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Finterior-design&psig=AOvVaw1cRcsk2s34Zr0H5TjwiA7r&ust=1704472065755000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCMiHyLGTxIMDFQAAAAAdAAAAABAE',
      checkinTime : new Date(11-12-2023),
      checkoutTime : new Date(13-12-2023),
      rating : 2.56547
    },
    {
      roomNumber : 3,
      roomType :'Deluxe Room3',
      amenities : 'AC, WiFi, TV, Bathroom, Kitchen',
      price : 5000,
      photos : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Finterior-design&psig=AOvVaw1cRcsk2s34Zr0H5TjwiA7r&ust=1704472065755000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCMiHyLGTxIMDFQAAAAAdAAAAABAE',
      checkinTime : new Date(11-12-2023),
      checkoutTime : new Date(13-12-2023),
      rating: 4.524567
    }]
  }
}
