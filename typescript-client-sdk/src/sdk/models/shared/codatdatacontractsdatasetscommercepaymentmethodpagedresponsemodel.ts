import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommercePaymentMethod } from "./codatdatacontractsdatasetscommercepaymentmethod";
import { CodatDataContractsDatasetsCommercePaymentMethodPagedResponseLinksModel } from "./codatdatacontractsdatasetscommercepaymentmethodpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsCommercePaymentMethodPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsCommercePaymentMethodPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsCommercePaymentMethodPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsCommercePaymentMethodPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommercePaymentMethod })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsCommercePaymentMethod)
  results?: CodatDataContractsDatasetsCommercePaymentMethod[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}