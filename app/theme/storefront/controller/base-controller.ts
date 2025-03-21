// baseController.ts
import { Controller } from "paykhom-fw/modules/controller";
import { PostgresqlClientService } from "paykhom-fw/modules/service/postgresql-client-service";
import { ContainerProvider } from 'paykhom-fw/modules/provider/container-provider';

export class BaseController extends Controller {
  //private pgc: PostgresqlClientService;

  constructor(config: Record<string, any>={}) {
    super(config);
    //this.pgc = ContainerProvider.getContainer().resolve("pgc") as PostgresqlClientService;
  }

  getRoutes(): any {
    return []
  }
  getImportMetaUrl(): string {
    return import.meta.url;
  }

}




