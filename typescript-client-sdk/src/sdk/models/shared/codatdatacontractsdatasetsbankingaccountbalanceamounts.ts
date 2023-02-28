import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CodatDataContractsDatasetsBankingAccountBalanceAmounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "available" })
  available?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  current: number;

  @SpeakeasyMetadata()
  @Expose({ name: "limit" })
  limit?: number;
}