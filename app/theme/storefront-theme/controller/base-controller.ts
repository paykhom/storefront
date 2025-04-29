// baseController.ts
import { Controller } from "paykhom-fw/component/controller";
import { PaykhomApiClientService } from "paykhom-fw/component/service/paykhom-api-client-service";
import { ContainerProvider } from 'paykhom-fw/component/provider/container-provider';

export class BaseController extends Controller {
  //private pgc: PaykhomApiClientService;

  constructor(config: Record<string, any>={}) {
    super(config);
    //this.pgc = ContainerProvider.getContainer().resolve("pgc") as PaykhomApiClientService;
  }

  getRoutes(): any {
    return []
  }
  getImportMetaUrl(): string {
    return import.meta.url;
  }

}




