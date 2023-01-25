import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsPaymentMethodPagedResponseLinksModel } from "./codatdatacontractsdatasetspaymentmethodpagedresponselinksmodel";
import { CodatDataContractsDatasetsPaymentMethod } from "./codatdatacontractsdatasetspaymentmethod";



// CodatDataContractsDatasetsPaymentMethodPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsPaymentMethodPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsPaymentMethodPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsPaymentMethod })
  results?: CodatDataContractsDatasetsPaymentMethod[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
