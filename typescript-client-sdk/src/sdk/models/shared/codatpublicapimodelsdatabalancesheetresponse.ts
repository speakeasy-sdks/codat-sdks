import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsBalanceSheet } from "./codatdatacontractsdatasetsbalancesheet";



export class CodatPublicApiModelsDataBalanceSheetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=earliestAvailableMonth" })
  earliestAvailableMonth?: Date;

  @SpeakeasyMetadata({ data: "json, name=mostRecentAvailableMonth" })
  mostRecentAvailableMonth?: Date;

  @SpeakeasyMetadata({ data: "json, name=reports", elemType: CodatDataContractsDatasetsBalanceSheet })
  reports: CodatDataContractsDatasetsBalanceSheet[];
}
