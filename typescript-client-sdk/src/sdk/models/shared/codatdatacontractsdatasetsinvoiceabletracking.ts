import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsRecordRef } from "./codatdatacontractsdatasetsrecordref";


export class CodatDataContractsDatasetsInvoiceableTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoiceTo" })
  invoiceTo?: CodatDataContractsDatasetsRecordRef;

  @SpeakeasyMetadata({ data: "json, name=recordRefs", elemType: CodatDataContractsDatasetsRecordRef })
  recordRefs: CodatDataContractsDatasetsRecordRef[];
}