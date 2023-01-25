import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsRecordRef } from "./codatdatacontractsdatasetsrecordref";



export class CodatDataContractsDatasetsTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recordRefs", elemType: CodatDataContractsDatasetsRecordRef })
  recordRefs?: CodatDataContractsDatasetsRecordRef[];
}
