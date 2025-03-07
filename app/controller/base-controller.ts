// baseController.ts
import { Controller } from "paykhom-fw/controller";
import { PostgresqlClientService } from "paykhom-fw/service/postgresql-client-service";
import { ContainerProvider } from 'paykhom-fw/provider/container-provider';

export class BaseController extends Controller {
  //private pgc: PostgresqlClientService;

  constructor(args: Record<string, any>={}, deps: Record<string, any>={}) {
    super(args, deps);
    //this.pgc = ContainerProvider.getContainer().resolve("pgc") as PostgresqlClientService;
  }

}




