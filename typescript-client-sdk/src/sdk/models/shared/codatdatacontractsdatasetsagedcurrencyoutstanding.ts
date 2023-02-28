import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAgedOutstandingAmount } from "./codatdatacontractsdatasetsagedoutstandingamount";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsAgedCurrencyOutstanding extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsAgedOutstandingAmount })
  @Expose({ name: "agedOutstandingAmounts" })
  @Type(() => CodatDataContractsDatasetsAgedOutstandingAmount)
  agedOutstandingAmounts?: CodatDataContractsDatasetsAgedOutstandingAmount[];

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;
}