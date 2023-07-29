import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../container/container.component';
import { MatIconModule } from '@angular/material';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/globals/services/account.service';

@Component({
  selector: 'Menu',
  standalone: true,
  imports: [CommonModule, ContainerComponent, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private route: Router,
    private account: AccountService
  ) { }

  ngOnInit(): void {
  }

  go(route: string) {
    console.log(route)
    this.route.navigate([route]);
  }

  async logout() {
    this.account.logout();
    this.route.navigate(["/"]);
  }

}
