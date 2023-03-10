import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankingAccountPagedResponseLinksModel } from "./codatdatacontractsdatasetsbankingaccountpagedresponselinksmodel";
import { CodatDataContractsDatasetsBankingAccount } from "./codatdatacontractsdatasetsbankingaccount";



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
