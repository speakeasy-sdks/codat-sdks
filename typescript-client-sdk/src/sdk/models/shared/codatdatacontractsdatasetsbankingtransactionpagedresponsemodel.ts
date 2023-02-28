import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankingTransaction } from "./codatdatacontractsdatasetsbankingtransaction";
import { CodatDataContractsDatasetsBankingTransactionPagedResponseLinksModel } from "./codatdatacontractsdatasetsbankingtransactionpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsBankingTransactionPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsBankingTransactionPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsBankingTransactionPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsBankingTransactionPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsBankingTransaction })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsBankingTransaction)
  results?: CodatDataContractsDatasetsBankingTransaction[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}