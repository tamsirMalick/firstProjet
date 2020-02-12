import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.page.html',
  styleUrls: ['./plats.page.scss'],
})
export class PlatsPage implements OnInit {
  plats = [
    {
      id: '1',
      nom: 'Theip',
      prix: '1500'

    },
    {
      id: '2',
      nom: 'Mafé',
      prix: '1000'

    },
    {
      id: '3',
      nom: 'Diaga',
      prix: '1700'

    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  addPlat() {
    this.router.navigateByUrl('plats/ajouter');
  }
  update(id: number) {
    this.router.navigate(['plats/modifier', id]);
  }
}
