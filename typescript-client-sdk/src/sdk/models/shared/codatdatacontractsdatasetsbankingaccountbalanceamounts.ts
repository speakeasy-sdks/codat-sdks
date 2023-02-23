import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatDataContractsDatasetsBankingAccountBalanceAmounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available?: number;

  @SpeakeasyMetadata({ data: "json, name=current" })
  current: number;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;
}