import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceOrderPagedResponseLinksModel } from "./codatdatacontractsdatasetscommerceorderpagedresponselinksmodel";
import { CodatDataContractsDatasetsCommerceOrder } from "./codatdatacontractsdatasetscommerceorder";



// CodatDataContractsDatasetsCommerceOrderPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsCommerceOrderPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsCommerceOrderPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsCommerceOrder })
  results?: CodatDataContractsDatasetsCommerceOrder[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
