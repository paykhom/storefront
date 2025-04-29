import { WebApplication } from "paykhom-fw/component/web-application";
import "global"; // Loads `html` globally
import appConfig from './config-app';
import fwConfig from './config-fw';
import {App} from './app'


import { ApplicationServer } from "paykhom-fw/component/server/application-server";


/*async*/ ApplicationServer.main(App, fwConfig, appConfig);
