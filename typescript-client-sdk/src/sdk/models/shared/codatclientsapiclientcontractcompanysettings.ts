import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CodatClientsApiClientContractCompanySettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=offlineConnectorInstall" })
  offlineConnectorInstall?: boolean;

  @SpeakeasyMetadata({ data: "json, name=oneTimeSync" })
  oneTimeSync?: string;
}
