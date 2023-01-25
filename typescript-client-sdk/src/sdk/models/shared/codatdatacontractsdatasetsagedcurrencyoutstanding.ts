import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsAgedOutstandingAmount } from "./codatdatacontractsdatasetsagedoutstandingamount";



export class CodatDataContractsDatasetsAgedCurrencyOutstanding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agedOutstandingAmounts", elemType: CodatDataContractsDatasetsAgedOutstandingAmount })
  agedOutstandingAmounts?: CodatDataContractsDatasetsAgedOutstandingAmount[];

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;
}
