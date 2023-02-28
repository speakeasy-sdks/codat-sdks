import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CodatClientsApiClientContractCompanySettings extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "offlineConnectorInstall" })
  offlineConnectorInstall?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "oneTimeSync" })
  oneTimeSync?: string;
}