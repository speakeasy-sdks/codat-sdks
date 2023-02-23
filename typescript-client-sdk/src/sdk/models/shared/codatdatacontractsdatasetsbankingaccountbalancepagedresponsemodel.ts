import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankingAccountBalance } from "./codatdatacontractsdatasetsbankingaccountbalance";
import { CodatDataContractsDatasetsBankingAccountBalancePagedResponseLinksModel } from "./codatdatacontractsdatasetsbankingaccountbalancepagedresponselinksmodel";


// CodatDataContractsDatasetsBankingAccountBalancePagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsBankingAccountBalancePagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsBankingAccountBalancePagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsBankingAccountBalance })
  results?: CodatDataContractsDatasetsBankingAccountBalance[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}