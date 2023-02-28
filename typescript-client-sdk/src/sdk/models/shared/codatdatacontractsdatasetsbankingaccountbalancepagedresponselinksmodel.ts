import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankingAccountBalancePagedResponseHrefModel } from "./codatdatacontractsdatasetsbankingaccountbalancepagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsBankingAccountBalancePagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsBankingAccountBalancePagedResponseHrefModel)
  current?: CodatDataContractsDatasetsBankingAccountBalancePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsBankingAccountBalancePagedResponseHrefModel)
  next?: CodatDataContractsDatasetsBankingAccountBalancePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsBankingAccountBalancePagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsBankingAccountBalancePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsBankingAccountBalancePagedResponseHrefModel)
  self?: CodatDataContractsDatasetsBankingAccountBalancePagedResponseHrefModel;
}