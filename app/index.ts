import { WebApplication } from "paykhom-fw/component/web-application";
import "global"; // Loads `html` globally
//import {config} from './config';




export class App extends WebApplication {

    constructor(config: Record<string, any>) {
        //debugger //bug
        super(config);
    }
    getImportMetaUrl(): string {
        return import.meta.url;
      }
    
    async $uponInit(config: Record<string, any>): Promise<void> {
        
         


    }

    async $uponReady(config: Record<string, any>): Promise<void> {


    }

    async $uponStart(config: Record<string, any>): Promise<void> {

    }



    async $uponStop(): Promise<void> {
        //super.shutdown();

    }
}

