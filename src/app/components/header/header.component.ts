import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../container/container.component';
import { IUser } from 'src/app/globals/interfaces/user.interface';
import { UserService } from 'src/app/globals/services/user.service';

@Component({
  selector: 'Header',
  standalone: true,
  imports: [CommonModule, ContainerComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user!: IUser;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

}
