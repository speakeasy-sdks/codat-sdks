import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCustomerPagedResponseLinksModel } from "./codatdatacontractsdatasetscustomerpagedresponselinksmodel";
import { CodatDataContractsDatasetsCustomer } from "./codatdatacontractsdatasetscustomer";



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
