import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceTransactionPagedResponseLinksModel } from "./codatdatacontractsdatasetscommercetransactionpagedresponselinksmodel";
import { CodatDataContractsDatasetsCommerceTransaction } from "./codatdatacontractsdatasetscommercetransaction";



// CodatDataContractsDatasetsCommerceTransactionPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsCommerceTransactionPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsCommerceTransactionPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsCommerceTransaction })
  results?: CodatDataContractsDatasetsCommerceTransaction[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
