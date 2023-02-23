import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankingAccountBalancePagedResponseHrefModel } from "./codatdatacontractsdatasetsbankingaccountbalancepagedresponsehrefmodel";


export class CodatDataContractsDatasetsBankingAccountBalancePagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: CodatDataContractsDatasetsBankingAccountBalancePagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: CodatDataContractsDatasetsBankingAccountBalancePagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: CodatDataContractsDatasetsBankingAccountBalancePagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: CodatDataContractsDatasetsBankingAccountBalancePagedResponseHrefModel;
}