import { Theme } from 'paykhom-fw/modules/theme';
import { MenuItem } from 'paykhom-fw/modules/component';


export class BackofficeTheme extends Theme {
    constructor(config: Record<string, any>) {
      super(config);
      this.name = 'Default Theme';
      this.slug = 'default';
      this.description = 'The default Paykhom theme';
    }
  
    getMenus(): MenuItem {
      return { name: 'Home', path: '/' };
    }
    getImportMetaUrl(): string {
      return import.meta.url;
    }
  
  }