import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/shared/service/theme/theme.service';
import { ThemeSetting } from 'src/app/shared/models/model';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.scss',
})
export class ThemesComponent implements OnInit {
  themeSettings: ThemeSetting[] = [];

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.loadThemeSettings();
  }

  async loadThemeSettings() {
    try {
      this.themeSettings = await this.themeService.getThemeSettings();
    } catch (error) {
      console.error('Error fetching theme settings:', error);
    }
  }
}
