import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankingTransaction } from "./codatdatacontractsdatasetsbankingtransaction";
import { CodatDataContractsDatasetsBankingTransactionPagedResponseLinksModel } from "./codatdatacontractsdatasetsbankingtransactionpagedresponselinksmodel";


// CodatDataContractsDatasetsBankingTransactionPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsBankingTransactionPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsBankingTransactionPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsBankingTransaction })
  results?: CodatDataContractsDatasetsBankingTransaction[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}