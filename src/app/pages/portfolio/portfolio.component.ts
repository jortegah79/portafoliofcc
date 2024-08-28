import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TitleComponent } from '../../components/title/title.component';
import { MyWorksComponent } from "../../components/my-works/my-works.component";
import { SkillsComponent } from "../../components/skills/skills.component";
import { FooterComponent } from "../../components/footer/footer.component";


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NavbarComponent, TitleComponent, HeroComponent, MyWorksComponent, SkillsComponent, FooterComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
