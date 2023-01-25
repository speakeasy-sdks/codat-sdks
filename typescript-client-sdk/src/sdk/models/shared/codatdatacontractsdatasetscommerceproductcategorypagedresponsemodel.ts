import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceProductCategoryPagedResponseLinksModel } from "./codatdatacontractsdatasetscommerceproductcategorypagedresponselinksmodel";
import { CodatDataContractsDatasetsCommerceProductCategory } from "./codatdatacontractsdatasetscommerceproductcategory";



// CodatDataContractsDatasetsCommerceProductCategoryPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsCommerceProductCategoryPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsCommerceProductCategoryPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsCommerceProductCategory })
  results?: CodatDataContractsDatasetsCommerceProductCategory[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
