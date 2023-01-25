import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsBillPaymentPagedResponseLinksModel } from "./codatdatacontractsdatasetsbillpaymentpagedresponselinksmodel";
import { CodatDataContractsDatasetsBillPayment } from "./codatdatacontractsdatasetsbillpayment";



// CodatDataContractsDatasetsBillPaymentPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsBillPaymentPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsBillPaymentPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsBillPayment })
  results?: CodatDataContractsDatasetsBillPayment[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
