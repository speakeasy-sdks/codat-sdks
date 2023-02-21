import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatPublicApiModelsCompanyDataConnection } from "./codatpublicapimodelscompanydataconnection";



export class CodatPublicApiModelsCompanyCompany extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdByUserName" })
  createdByUserName?: string;

  @SpeakeasyMetadata({ data: "json, name=dataConnections", elemType: CodatPublicApiModelsCompanyDataConnection })
  dataConnections: CodatPublicApiModelsCompanyDataConnection[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=lastSync" })
  lastSync?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform: string;

  @SpeakeasyMetadata({ data: "json, name=redirect" })
  redirect: string;
}
