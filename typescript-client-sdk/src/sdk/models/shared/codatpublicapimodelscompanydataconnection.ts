import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsCompanyDataConnectionError } from "./codatpublicapimodelscompanydataconnectionerror";


export class CodatPublicApiModelsCompanyDataConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionInfo" })
  connectionInfo?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=dataConnectionErrors", elemType: CodatPublicApiModelsCompanyDataConnectionError })
  dataConnectionErrors?: CodatPublicApiModelsCompanyDataConnectionError[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=integrationId" })
  integrationId: string;

  @SpeakeasyMetadata({ data: "json, name=integrationKey" })
  integrationKey?: string;

  @SpeakeasyMetadata({ data: "json, name=lastSync" })
  lastSync?: Date;

  @SpeakeasyMetadata({ data: "json, name=linkUrl" })
  linkUrl: string;

  @SpeakeasyMetadata({ data: "json, name=platformName" })
  platformName: string;

  @SpeakeasyMetadata({ data: "json, name=sourceId" })
  sourceId: string;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}