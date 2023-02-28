import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceProductCategory } from "./codatdatacontractsdatasetscommerceproductcategory";
import { CodatDataContractsDatasetsCommerceProductCategoryPagedResponseLinksModel } from "./codatdatacontractsdatasetscommerceproductcategorypagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsCommerceProductCategoryPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsCommerceProductCategoryPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsCommerceProductCategoryPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsCommerceProductCategoryPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommerceProductCategory })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsCommerceProductCategory)
  results?: CodatDataContractsDatasetsCommerceProductCategory[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}