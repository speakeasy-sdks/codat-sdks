import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAccount } from "./codatdatacontractsdatasetsaccount";
import { CodatDataContractsDatasetsAccountPagedResponseLinksModel } from "./codatdatacontractsdatasetsaccountpagedresponselinksmodel";


// CodatDataContractsDatasetsAccountPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsAccountPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsAccountPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsAccount })
  results?: CodatDataContractsDatasetsAccount[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}