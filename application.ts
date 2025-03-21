import { WebApplication } from "paykhom-fw/modules/application/web-application";
import "global"; // Loads `html` globally
import {config} from './application-config';


import { ApplicationServer } from "./modules/server/application-server";


class Application extends WebApplication {

    constructor() {
        super({});
    }

    async uponInit(config: Record<string, any>): Promise<void> {
        
         


    }

    async uponReady(config: Record<string, any>): Promise<void> {


    }

    async uponStart(config: Record<string, any>): Promise<void> {

    }



    async uponStop(): Promise<void> {
        //super.shutdown();

    }
}

/*async*/ ApplicationServer.main(new Application(), config);
