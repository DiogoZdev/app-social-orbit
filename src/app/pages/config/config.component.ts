import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'Config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
  standalone: true,
  imports: [RouterModule]
})
export class ConfigPage implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  public id: number = 0;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['id']);
  }

}
