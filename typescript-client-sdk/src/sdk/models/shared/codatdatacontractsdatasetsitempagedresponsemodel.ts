import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsItem } from "./codatdatacontractsdatasetsitem";
import { CodatDataContractsDatasetsItemPagedResponseLinksModel } from "./codatdatacontractsdatasetsitempagedresponselinksmodel";


// CodatDataContractsDatasetsItemPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsItemPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsItemPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsItem })
  results?: CodatDataContractsDatasetsItem[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}