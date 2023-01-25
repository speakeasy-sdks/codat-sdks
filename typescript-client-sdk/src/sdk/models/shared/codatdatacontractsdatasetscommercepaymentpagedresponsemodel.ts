import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommercePaymentPagedResponseLinksModel } from "./codatdatacontractsdatasetscommercepaymentpagedresponselinksmodel";
import { CodatDataContractsDatasetsCommercePayment } from "./codatdatacontractsdatasetscommercepayment";



// CodatDataContractsDatasetsCommercePaymentPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsCommercePaymentPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsCommercePaymentPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsCommercePayment })
  results?: CodatDataContractsDatasetsCommercePayment[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
