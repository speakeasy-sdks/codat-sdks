import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatClientsApiClientContractSyncSetting } from "./codatclientsapiclientcontractsyncsetting";


export class CodatClientsApiClientContractClientSyncSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=overridesDefaults" })
  overridesDefaults?: boolean;

  @SpeakeasyMetadata({ data: "json, name=settings", elemType: CodatClientsApiClientContractSyncSetting })
  settings?: CodatClientsApiClientContractSyncSetting[];
}