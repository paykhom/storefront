import { Theme } from 'paykhom-fw/component/theme';
import { MenuItem } from 'paykhom-fw/component';

export class StorefrontTheme extends Theme {
    constructor(config: Record<string, any>) {
      super(config);
      this.name = 'Default Theme';
      this.slug = 'default';
      this.description = 'The default Paykhom theme';
    }
  
    getMenus(): MenuItem {
      return { label: 'Home', url: '/' };
    }
    
    getImportMetaUrl(): string {
      return import.meta.url;
    }
  
    async $uponInit(config: Record<string, any>={}): Promise<void> {

    } 
    
    async $uponReady(config: Record<string, any>={}): Promise<void> {

    }
    
    async $uponStart(config: Record<string, any>={}): Promise<void> {

    }
    
    async $uponStop(config: Record<string, any>={}): Promise<void> {

    }
    
    async $uponReload(config: Record<string, any>={}): Promise<void> {

    }
    
    async $uponEnable(config: Record<string, any>={}): Promise<void> {

    }
    
    async $uponDisable(config: Record<string, any>={}): Promise<void> {

    }
    
    async $uponInstall(config: Record<string, any>={}): Promise<void> {

    }
    
    async $uponUninstall(config: Record<string, any>={}): Promise<void> {

    }

  }

