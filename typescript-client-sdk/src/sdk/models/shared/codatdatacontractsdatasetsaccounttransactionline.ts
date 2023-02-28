import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsRecordRef } from "./codatdatacontractsdatasetsrecordref";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsAccountTransactionLine extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => CodatDataContractsDatasetsRecordRef)
  recordRef?: CodatDataContractsDatasetsRecordRef;
}