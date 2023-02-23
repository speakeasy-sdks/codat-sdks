import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAgedDebtorOutstanding } from "./codatdatacontractsdatasetsageddebtoroutstanding";


export class CodatDataContractsDatasetsAgedDebtorOutstandingICollectionReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: CodatDataContractsDatasetsAgedDebtorOutstanding })
  data: CodatDataContractsDatasetsAgedDebtorOutstanding[];

  @SpeakeasyMetadata({ data: "json, name=generated" })
  generated: Date;

  @SpeakeasyMetadata({ data: "json, name=reportDate" })
  reportDate: Date;
}