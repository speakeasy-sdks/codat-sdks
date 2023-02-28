import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankingTransactionCategory } from "./codatdatacontractsdatasetsbankingtransactioncategory";
import { CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseLinksModel } from "./codatdatacontractsdatasetsbankingtransactioncategorypagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsBankingTransactionCategory })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsBankingTransactionCategory)
  results?: CodatDataContractsDatasetsBankingTransactionCategory[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}