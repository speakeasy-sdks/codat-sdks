import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseLinksModel } from "./codatdatacontractsdatasetsbankingtransactioncategorypagedresponselinksmodel";
import { CodatDataContractsDatasetsBankingTransactionCategory } from "./codatdatacontractsdatasetsbankingtransactioncategory";



// CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsBankingTransactionCategory })
  results?: CodatDataContractsDatasetsBankingTransactionCategory[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
