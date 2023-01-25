import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsRecordRef } from "./codatdatacontractsdatasetsrecordref";



export class CodatDataContractsDatasetsFromAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: CodatDataContractsDatasetsRecordRef;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;
}
