import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsItemPagedResponseLinksModel } from "./codatdatacontractsdatasetsitempagedresponselinksmodel";
import { CodatDataContractsDatasetsItem } from "./codatdatacontractsdatasetsitem";



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
