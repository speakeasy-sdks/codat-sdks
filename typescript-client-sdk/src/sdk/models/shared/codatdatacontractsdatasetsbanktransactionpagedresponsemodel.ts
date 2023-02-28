import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankTransaction } from "./codatdatacontractsdatasetsbanktransaction";
import { CodatDataContractsDatasetsBankTransactionPagedResponseLinksModel } from "./codatdatacontractsdatasetsbanktransactionpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsBankTransactionPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsBankTransactionPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsBankTransactionPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsBankTransactionPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsBankTransaction })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsBankTransaction)
  results?: CodatDataContractsDatasetsBankTransaction[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}