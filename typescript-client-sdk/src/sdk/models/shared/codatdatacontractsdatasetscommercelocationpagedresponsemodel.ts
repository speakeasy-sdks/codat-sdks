import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceLocation } from "./codatdatacontractsdatasetscommercelocation";
import { CodatDataContractsDatasetsCommerceLocationPagedResponseLinksModel } from "./codatdatacontractsdatasetscommercelocationpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsCommerceLocationPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsCommerceLocationPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsCommerceLocationPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsCommerceLocationPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommerceLocation })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsCommerceLocation)
  results?: CodatDataContractsDatasetsCommerceLocation[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}