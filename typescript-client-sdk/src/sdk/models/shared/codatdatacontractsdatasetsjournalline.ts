import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsAccountRef } from "./codatdatacontractsdatasetsaccountref";
import { CodatDataContractsDatasetsTracking } from "./codatdatacontractsdatasetstracking";



export class CodatDataContractsDatasetsJournalLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: CodatDataContractsDatasetsAccountRef;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=netAmount" })
  netAmount: number;

  @SpeakeasyMetadata({ data: "json, name=tracking" })
  tracking?: CodatDataContractsDatasetsTracking;
}
