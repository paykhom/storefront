// baseController.ts
import { Controller } from "paykhom-fw/container/controller";
import { PostgresqlClientService } from "paykhom-fw/container/service/postgresql-client-service";
import { ContainerProvider } from 'paykhom-fw/container/provider/container-provider';

export class BaseController extends Controller {
  //private pgc: PostgresqlClientService;

  constructor(config: Record<string, any>={}) {
    super(config);
    //this.pgc = ContainerProvider.getContainer().resolve("pgc") as PostgresqlClientService;
  }

}




