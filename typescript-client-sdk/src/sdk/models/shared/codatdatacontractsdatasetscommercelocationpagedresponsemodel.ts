import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceLocationPagedResponseLinksModel } from "./codatdatacontractsdatasetscommercelocationpagedresponselinksmodel";
import { CodatDataContractsDatasetsCommerceLocation } from "./codatdatacontractsdatasetscommercelocation";



// CodatDataContractsDatasetsCommerceLocationPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsCommerceLocationPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsCommerceLocationPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsCommerceLocation })
  results?: CodatDataContractsDatasetsCommerceLocation[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
