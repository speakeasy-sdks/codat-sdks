import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankingAccountBalance } from "./codatdatacontractsdatasetsbankingaccountbalance";
import { CodatDataContractsDatasetsBankingAccountBalancePagedResponseLinksModel } from "./codatdatacontractsdatasetsbankingaccountbalancepagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsBankingAccountBalancePagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsBankingAccountBalancePagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsBankingAccountBalancePagedResponseLinksModel)
  links?: CodatDataContractsDatasetsBankingAccountBalancePagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsBankingAccountBalance })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsBankingAccountBalance)
  results?: CodatDataContractsDatasetsBankingAccountBalance[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}