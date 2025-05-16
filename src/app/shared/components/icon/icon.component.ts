import {Component, Input, OnChanges} from '@angular/core';
import {ICONS} from './icons';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'sdi-icon',
  imports: [
    NgStyle
  ],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent implements OnChanges {
  @Input() name!: keyof typeof ICONS;
  @Input() size: string = '1.5rem';
  @Input() color: string = 'currentColor';
  svg: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    const rawSvg = ICONS[this.name] ?? '';
    this.svg = this.sanitizer.bypassSecurityTrustHtml(rawSvg);
  }
}
