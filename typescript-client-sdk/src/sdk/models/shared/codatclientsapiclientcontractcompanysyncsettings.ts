import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatClientsApiClientContractSyncSetting } from "./codatclientsapiclientcontractsyncsetting";



export class CodatClientsApiClientContractCompanySyncSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=overridesDefaults" })
  overridesDefaults?: boolean;

  @SpeakeasyMetadata({ data: "json, name=settings", elemType: CodatClientsApiClientContractSyncSetting })
  settings?: CodatClientsApiClientContractSyncSetting[];
}
