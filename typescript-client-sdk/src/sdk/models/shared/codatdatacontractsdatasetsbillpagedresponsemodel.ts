import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsBillPagedResponseLinksModel } from "./codatdatacontractsdatasetsbillpagedresponselinksmodel";
import { CodatDataContractsDatasetsBill } from "./codatdatacontractsdatasetsbill";



// CodatDataContractsDatasetsBillPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsBillPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsBillPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsBill })
  results?: CodatDataContractsDatasetsBill[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
