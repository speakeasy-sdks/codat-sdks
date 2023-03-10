import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankTransactionPagedResponseLinksModel } from "./codatdatacontractsdatasetsbanktransactionpagedresponselinksmodel";
import { CodatDataContractsDatasetsBankTransaction } from "./codatdatacontractsdatasetsbanktransaction";



// CodatDataContractsDatasetsBankTransactionPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsBankTransactionPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsBankTransactionPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsBankTransaction })
  results?: CodatDataContractsDatasetsBankTransaction[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
