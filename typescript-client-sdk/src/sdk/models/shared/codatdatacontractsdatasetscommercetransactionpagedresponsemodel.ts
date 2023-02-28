import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceTransaction } from "./codatdatacontractsdatasetscommercetransaction";
import { CodatDataContractsDatasetsCommerceTransactionPagedResponseLinksModel } from "./codatdatacontractsdatasetscommercetransactionpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsCommerceTransactionPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsCommerceTransactionPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsCommerceTransactionPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsCommerceTransactionPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommerceTransaction })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsCommerceTransaction)
  results?: CodatDataContractsDatasetsCommerceTransaction[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}