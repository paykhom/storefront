import { Component } from "paykhom-fw/modules/component";
import { WebApplication } from "paykhom-fw/modules/application/web-application";
import { WebEngine } from "paykhom-fw/modules/engine/web-engine";
import {config} from './application-fw-config';
import { readdir } from "fs/promises";
import { join, dirname } from "path";


import { fileURLToPath } from "bun";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export interface IModuleApplication {

}
export class ApplicationModule  extends WebApplication implements IModuleApplication {
    constructor(config: Record<string, any>) {
      super({})
    }

   
    getImportMetaUrl(): string {
        return import.meta.url;
      }
    
      
    async uponInit(appConfig: Record<string, any>): Promise<void> {


        await this.processContainerAsync(config.container);

        /* EKN: OLD
        const categories = Object.keys(config.container || {});
        //console.log('Categories:', categories);
    
        for (const componentCategory of categories) {
            //console.log(componentCategory);
            const components = Object.keys(config.container[componentCategory] || {});
            for (const component of components) {
                //console.log(component);
                const entity = config.container[componentCategory][component];
                const module = await entity.module;
                const ComponentClass = module[entity.class];
                this.register(
                    component,
                    (config: any) => new ComponentClass(config),
                    entity.config || {}
                );
            }
        }        


        //no await this.loadControllersAndRegisterRoutes(`${__dirname}/app/controller`)
        */

    }

    async uponReady(config: Record<string, any>): Promise<void> {
        
    }

    async uponStart(config: Record<string, any>): Promise<void> {

    }

    async uponStop(config: Record<string, any>): Promise<void> {

  }




}
