import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceDisputePagedResponseLinksModel } from "./codatdatacontractsdatasetscommercedisputepagedresponselinksmodel";
import { CodatDataContractsDatasetsCommerceDispute } from "./codatdatacontractsdatasetscommercedispute";



// CodatDataContractsDatasetsCommerceDisputePagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsCommerceDisputePagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsCommerceDisputePagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsCommerceDispute })
  results?: CodatDataContractsDatasetsCommerceDispute[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
