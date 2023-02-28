import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBillPayment } from "./codatdatacontractsdatasetsbillpayment";
import { CodatDataContractsDatasetsBillPaymentPagedResponseLinksModel } from "./codatdatacontractsdatasetsbillpaymentpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsBillPaymentPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsBillPaymentPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsBillPaymentPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsBillPaymentPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsBillPayment })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsBillPayment)
  results?: CodatDataContractsDatasetsBillPayment[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}