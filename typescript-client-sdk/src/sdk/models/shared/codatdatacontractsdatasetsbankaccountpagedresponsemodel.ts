import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankAccountPagedResponseLinksModel } from "./codatdatacontractsdatasetsbankaccountpagedresponselinksmodel";
import { CodatDataContractsDatasetsBankAccount } from "./codatdatacontractsdatasetsbankaccount";



// CodatDataContractsDatasetsBankAccountPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsBankAccountPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsBankAccountPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsBankAccount })
  results?: CodatDataContractsDatasetsBankAccount[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
