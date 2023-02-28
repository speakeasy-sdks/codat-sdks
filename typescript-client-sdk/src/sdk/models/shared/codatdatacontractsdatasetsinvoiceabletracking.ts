import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsRecordRef } from "./codatdatacontractsdatasetsrecordref";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsInvoiceableTracking extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "invoiceTo" })
  @Type(() => CodatDataContractsDatasetsRecordRef)
  invoiceTo?: CodatDataContractsDatasetsRecordRef;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsRecordRef })
  @Expose({ name: "recordRefs" })
  @Type(() => CodatDataContractsDatasetsRecordRef)
  recordRefs: CodatDataContractsDatasetsRecordRef[];
}