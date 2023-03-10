import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceProductPagedResponseLinksModel } from "./codatdatacontractsdatasetscommerceproductpagedresponselinksmodel";
import { CodatDataContractsDatasetsCommerceProduct } from "./codatdatacontractsdatasetscommerceproduct";



// CodatDataContractsDatasetsCommerceProductPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsCommerceProductPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsCommerceProductPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsCommerceProduct })
  results?: CodatDataContractsDatasetsCommerceProduct[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
