import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RoomsComponent, RoomsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  role = 'Admin';

  @ViewChild('name', {static : true}) name !: ElementRef;

  ngOnInit(): void {
      this.name.nativeElement.innerText = 'Hilton Hotel';
  }
  // @ViewChild('user' , {read : ViewContainerRef}) vcr ! : ViewContainerRef;
  
  // ngAfterViewInit(): void {
  //     const componentRef = this.vcr.createComponent(RoomsComponent);
  // }
}
