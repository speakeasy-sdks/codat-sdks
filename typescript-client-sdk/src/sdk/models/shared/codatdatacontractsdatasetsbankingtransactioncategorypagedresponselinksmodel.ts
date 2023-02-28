import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseHrefModel } from "./codatdatacontractsdatasetsbankingtransactioncategorypagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseHrefModel;
}