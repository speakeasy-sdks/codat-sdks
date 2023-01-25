import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsReportLine } from "./codatdatacontractsdatasetsreportline";



export class CodatDataContractsDatasetsCashFlowStatement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cashPayments" })
  cashPayments?: CodatDataContractsDatasetsReportLine;

  @SpeakeasyMetadata({ data: "json, name=cashReceipts" })
  cashReceipts?: CodatDataContractsDatasetsReportLine;

  @SpeakeasyMetadata({ data: "json, name=fromDate" })
  fromDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=toDate" })
  toDate?: Date;
}
