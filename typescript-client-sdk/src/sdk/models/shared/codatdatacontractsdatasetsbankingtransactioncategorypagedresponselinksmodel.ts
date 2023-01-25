import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseHrefModel } from "./codatdatacontractsdatasetsbankingtransactioncategorypagedresponsehrefmodel";



export class CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseHrefModel;
}
