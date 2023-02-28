import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatClientsApiClientContractSyncSetting } from "./codatclientsapiclientcontractsyncsetting";
import { Expose, Type } from "class-transformer";


export class CodatClientsApiClientContractCompanySyncSettings extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "overridesDefaults" })
  overridesDefaults?: boolean;

  @SpeakeasyMetadata({ elemType: CodatClientsApiClientContractSyncSetting })
  @Expose({ name: "settings" })
  @Type(() => CodatClientsApiClientContractSyncSetting)
  settings?: CodatClientsApiClientContractSyncSetting[];
}