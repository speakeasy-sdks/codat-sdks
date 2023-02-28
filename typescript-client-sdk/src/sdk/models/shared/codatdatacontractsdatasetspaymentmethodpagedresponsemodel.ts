import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsPaymentMethod } from "./codatdatacontractsdatasetspaymentmethod";
import { CodatDataContractsDatasetsPaymentMethodPagedResponseLinksModel } from "./codatdatacontractsdatasetspaymentmethodpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsPaymentMethodPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsPaymentMethodPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsPaymentMethodPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsPaymentMethodPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsPaymentMethod })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsPaymentMethod)
  results?: CodatDataContractsDatasetsPaymentMethod[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}