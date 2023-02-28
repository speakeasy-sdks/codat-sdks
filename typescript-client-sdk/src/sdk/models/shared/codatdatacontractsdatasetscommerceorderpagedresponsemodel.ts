import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceOrder } from "./codatdatacontractsdatasetscommerceorder";
import { CodatDataContractsDatasetsCommerceOrderPagedResponseLinksModel } from "./codatdatacontractsdatasetscommerceorderpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsCommerceOrderPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsCommerceOrderPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsCommerceOrderPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsCommerceOrderPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommerceOrder })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsCommerceOrder)
  results?: CodatDataContractsDatasetsCommerceOrder[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}