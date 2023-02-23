import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceCustomer } from "./codatdatacontractsdatasetscommercecustomer";
import { CodatDataContractsDatasetsCommerceCustomerPagedResponseLinksModel } from "./codatdatacontractsdatasetscommercecustomerpagedresponselinksmodel";


// CodatDataContractsDatasetsCommerceCustomerPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsCommerceCustomerPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsCommerceCustomerPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsCommerceCustomer })
  results?: CodatDataContractsDatasetsCommerceCustomer[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}