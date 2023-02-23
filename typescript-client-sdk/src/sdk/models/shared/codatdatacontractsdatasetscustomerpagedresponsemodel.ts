import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCustomer } from "./codatdatacontractsdatasetscustomer";
import { CodatDataContractsDatasetsCustomerPagedResponseLinksModel } from "./codatdatacontractsdatasetscustomerpagedresponselinksmodel";


// CodatDataContractsDatasetsCustomerPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsCustomerPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsCustomerPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsCustomer })
  results?: CodatDataContractsDatasetsCustomer[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}