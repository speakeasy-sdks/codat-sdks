import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommercePayment } from "./codatdatacontractsdatasetscommercepayment";
import { CodatDataContractsDatasetsCommercePaymentPagedResponseLinksModel } from "./codatdatacontractsdatasetscommercepaymentpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsCommercePaymentPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsCommercePaymentPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsCommercePaymentPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsCommercePaymentPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommercePayment })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsCommercePayment)
  results?: CodatDataContractsDatasetsCommercePayment[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}