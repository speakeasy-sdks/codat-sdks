import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsRecordRef } from "./codatdatacontractsdatasetsrecordref";



export class CodatDataContractsDatasetsAccountTransactionLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=recordRef" })
  recordRef?: CodatDataContractsDatasetsRecordRef;
}
