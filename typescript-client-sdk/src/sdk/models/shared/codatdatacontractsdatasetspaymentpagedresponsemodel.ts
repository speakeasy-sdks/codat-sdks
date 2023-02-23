import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsPayment } from "./codatdatacontractsdatasetspayment";
import { CodatDataContractsDatasetsPaymentPagedResponseLinksModel } from "./codatdatacontractsdatasetspaymentpagedresponselinksmodel";


// CodatDataContractsDatasetsPaymentPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsPaymentPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsPaymentPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsPayment })
  results?: CodatDataContractsDatasetsPayment[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}