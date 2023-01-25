import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommercePaymentMethodPagedResponseLinksModel } from "./codatdatacontractsdatasetscommercepaymentmethodpagedresponselinksmodel";
import { CodatDataContractsDatasetsCommercePaymentMethod } from "./codatdatacontractsdatasetscommercepaymentmethod";



// CodatDataContractsDatasetsCommercePaymentMethodPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsCommercePaymentMethodPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsCommercePaymentMethodPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsCommercePaymentMethod })
  results?: CodatDataContractsDatasetsCommercePaymentMethod[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
