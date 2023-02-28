import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceDispute } from "./codatdatacontractsdatasetscommercedispute";
import { CodatDataContractsDatasetsCommerceDisputePagedResponseLinksModel } from "./codatdatacontractsdatasetscommercedisputepagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsCommerceDisputePagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsCommerceDisputePagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsCommerceDisputePagedResponseLinksModel)
  links?: CodatDataContractsDatasetsCommerceDisputePagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommerceDispute })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsCommerceDispute)
  results?: CodatDataContractsDatasetsCommerceDispute[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}