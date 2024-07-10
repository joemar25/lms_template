import { Injectable } from '@angular/core';
import { SupabaseService } from '../api-supabase/supabase.service';
import { ThemeSetting } from 'src/app/shared/models/model';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private supabaseService: SupabaseService) {}

  async getThemeSettings(): Promise<ThemeSetting[]> {
    const { data, error } = await this.supabaseService.client
      .from('theme_settings_tb')
      .select('*')
      .returns<ThemeSetting[]>();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}
