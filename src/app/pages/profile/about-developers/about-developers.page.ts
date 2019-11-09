import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-developers',
  templateUrl: './about-developers.page.html',
  styleUrls: ['./about-developers.page.scss'],
})
export class AboutDevelopersPage implements OnInit {

  developers: any = [
    {
      "name": "Rejiel Gonzales",
      "position": "Project Lead",
      "linkedin": "http://linkedin.com/in/rejiel-gonzales-b7994826",
      "image": "rejiel-gonzales.jpg"
    },
    {
      "name": "Jan Caleb Manzano",
      "position": "Lead Developer",
      "linkedin": "https://www.linkedin.com/in/jan-caleb-manzano-705694183/",
      "image": "jan-caleb-manzano.jpg"
    },
    {
      "name": "Kim Joseph Peñaloza",
      "position": "Front-End Developer",
      "linkedin": "https://www.linkedin.com/in/kj-penaloza-3ab129167/",
      "image": "kim-joseph-penaloza.jpg"
    },
    {
      "name": "Ivan Carlo Balingit",
      "position": "Front-End Developer",
      "linkedin": "https://www.linkedin.com/in/ivan-carlo-balingit-7469b550/",
      "image": "ivan-carlo-balingit.jfif"
    },
    {
      "name": "Red Gavin Racca",
      "position": "Back-End Developer",
      "linkedin": "https://www.linkedin.com/in/redracca/",
      "image": "red-gavin-racca.jfif"
    },
    {
      "name": "Bea Trishtan Garcia",
      "position": "UI/UX Designer",
      "linkedin": "https://www.linkedin.com/in/beagarcia-artistanimator/",
      "image": "bea-trishtan-garcia.jpg"
    }
  ]

  constructor() { }

  ngOnInit() { }

}
