import { Component, OnInit, Input } from '@angular/core';
import { Contract } from '../../../../models/contract';

@Component({
  selector: 'app-contrat-description',
  templateUrl: './contrat-description.component.html',
  styleUrls: ['./contrat-description.component.css']
})
export class ContratDescriptionComponent implements OnInit {

  @Input() contract: Contract;

  constructor() { }

  ngOnInit() {
    if (!this.contract) {
      this.contract = new Contract();
    }
  }

}
