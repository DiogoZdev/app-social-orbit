import { Component, OnInit } from '@angular/core';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IUser } from 'src/app/globals/interfaces/user.interface';
import { AccountService } from 'src/app/globals/services/account.service';
import { UserService } from 'src/app/globals/services/user.service';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MenuComponent, HeaderComponent]
})
export class HomePage implements OnInit {

  public user!: IUser | null;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    console.log(this.user)
  }

}
