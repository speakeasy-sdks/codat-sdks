import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsRecordRef } from "./codatdatacontractsdatasetsrecordref";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsRecordRef })
  @Expose({ name: "recordRefs" })
  @Type(() => CodatDataContractsDatasetsRecordRef)
  recordRefs?: CodatDataContractsDatasetsRecordRef[];
}