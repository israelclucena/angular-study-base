import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-woven-grid',
  imports: [CommonModule, MatCardModule, MatGridList, MatGridTile],
  templateUrl: './woven-grid.component.html',
  styleUrl: './woven-grid.component.scss',
})
export class WovenGridComponent {
  items = [
    {
      title: 'Commune',
      description: 'Fun event and community space inspired by Portland market.',
      image: 'assets/commune.jpg',
      link: '',
    },
    {
      title: 'Raw Tokyo',
      description: 'Vintage and goods market.',
      image: 'assets/raw-tokyo.jpg',
      link: '',
    },
    {
      title: 'Wine Market',
      description: 'Facebook page for Wine Market.',
      image: 'assets/wine-market.jpg',
      link: '',
    },
    {
      title: 'Coffee Shop',
      description: 'Create something with laser cutting machine.',
      image: 'assets/coffee-laser.jpg',
      link: '',
    },
    {
      title: 'Coffee Festival',
      description: 'Coffee festival event.',
      image: 'assets/coffee-festival.jpg',
      link: '',
    },
    {
      title: 'Design Institute',
      description: 'Primary school building turned into a creative office.',
      image: 'assets/design-institute.jpg',
      link: '',
    },
  ];
}
