// baseController.ts
import { Controller } from "paykhom-fw/app/controller";
import { PostgresqlClientService } from "paykhom-fw/container/service/postgresql-client-service";
import { ContainerProvider } from 'paykhom-fw/container/provider/container-provider';

export class BaseController extends Controller {
  //private pgc: PostgresqlClientService;

  constructor(args: Record<string, any>={}) {
    super(args);
    //this.pgc = ContainerProvider.getContainer().resolve("pgc") as PostgresqlClientService;
  }

}




