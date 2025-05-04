import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IdeasComponent} from './ideas/ideas.component';
import {IconComponent} from './shared/components/icon/icon.component';
import {PortalModule} from '@angular/cdk/portal';

@Component({
  selector: 'sdi-root',
  imports: [IdeasComponent, IconComponent, PortalModule],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss'
})
export class RootComponent {
  title = 'super-duper-ideas';
}
