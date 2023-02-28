import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankingTransactionPagedResponseHrefModel } from "./codatdatacontractsdatasetsbankingtransactionpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsBankingTransactionPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsBankingTransactionPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsBankingTransactionPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsBankingTransactionPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsBankingTransactionPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsBankingTransactionPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsBankingTransactionPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsBankingTransactionPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsBankingTransactionPagedResponseHrefModel;
}