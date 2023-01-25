import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsDirectCostPagedResponseLinksModel } from "./codatdatacontractsdatasetsdirectcostpagedresponselinksmodel";
import { CodatDataContractsDatasetsDirectCost } from "./codatdatacontractsdatasetsdirectcost";



// CodatDataContractsDatasetsDirectCostPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsDirectCostPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsDirectCostPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsDirectCost })
  results?: CodatDataContractsDatasetsDirectCost[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
