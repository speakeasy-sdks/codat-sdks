import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceCustomer } from "./codatdatacontractsdatasetscommercecustomer";
import { CodatDataContractsDatasetsCommerceCustomerPagedResponseLinksModel } from "./codatdatacontractsdatasetscommercecustomerpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsCommerceCustomerPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsCommerceCustomerPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsCommerceCustomerPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsCommerceCustomerPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommerceCustomer })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsCommerceCustomer)
  results?: CodatDataContractsDatasetsCommerceCustomer[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}