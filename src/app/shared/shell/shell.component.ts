import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { WovenGridComponent } from "../material/woven-grid/woven-grid.component";

@Component({
  selector: 'app-shell',
  imports: [MaterialModule, FooterComponent, HeaderComponent, SidebarComponent, RouterOutlet, WovenGridComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {

}
