import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { Contract } from '../../models/contract';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: User;
  comments: Array<any>;
  contrats: Contract[] = [];
  fakeDescription: string;

  /* THIS IS DEBUG FUNCTION */
  private createContrat() {
    const c: Contract = new Contract();

    c.id = Math.floor(Math.random() * 10) + 1;
    c.author_id = Math.floor(Math.random() * 10) + 1;
    c.signs_id = Array<number>();
    for (let i = 0; i < c.id; ++i) {
      c.signs_id.push(i);
    }
    c.emit = new Date(Date.now());
    c.duration = Math.floor(Math.random() * 150) + 30;
    c.body = 'Je suis une super description!';
    return c;
  }
  /* END OF DEBUG FUNCTIONS */

  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute) {
    /* THIS IS DEBUG VALUES */
    this.profile = new User();
    this.profile.id = this.activeRoute.snapshot.params['id'];
    this.profile.firstname = 'Debug';
    this.profile.name = 'User';
    this.profile.pseudo = 'kikoodu69';
    this.profile.capital = Math.floor(Math.random() * 1000000);
    for (let i = 0; i < this.profile.id * 3; ++i) {
      this.contrats.push(this.createContrat());
    }
    this.fakeDescription = 'Je suis un utilisateur de test: J\'aime servir d\'utilisateur pour les tests.';
    /* END OF DEBUG VALUES */
   }

  ngOnInit() {
    const route: string = 'profile/' + this.activeRoute.snapshot.params['id'];
    this.apiService.get(route).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.error('an error occured: ', err);
      });
  }

}
