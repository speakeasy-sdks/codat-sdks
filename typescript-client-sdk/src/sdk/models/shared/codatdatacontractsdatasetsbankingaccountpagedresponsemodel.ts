import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankingAccount } from "./codatdatacontractsdatasetsbankingaccount";
import { CodatDataContractsDatasetsBankingAccountPagedResponseLinksModel } from "./codatdatacontractsdatasetsbankingaccountpagedresponselinksmodel";


// CodatDataContractsDatasetsBankingAccountPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsBankingAccountPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsBankingAccountPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsBankingAccount })
  results?: CodatDataContractsDatasetsBankingAccount[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}