import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CodatPublicApiModelsCompanyCompanySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "json, name=offlineConnectorInstall" })
  offlineConnectorInstall: boolean;
}
