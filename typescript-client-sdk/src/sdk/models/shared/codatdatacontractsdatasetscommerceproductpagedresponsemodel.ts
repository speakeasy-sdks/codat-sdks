import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceProduct } from "./codatdatacontractsdatasetscommerceproduct";
import { CodatDataContractsDatasetsCommerceProductPagedResponseLinksModel } from "./codatdatacontractsdatasetscommerceproductpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsCommerceProductPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsCommerceProductPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsCommerceProductPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsCommerceProductPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommerceProduct })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsCommerceProduct)
  results?: CodatDataContractsDatasetsCommerceProduct[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}