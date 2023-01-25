import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsDirectIncomePagedResponseLinksModel } from "./codatdatacontractsdatasetsdirectincomepagedresponselinksmodel";
import { CodatDataContractsDatasetsDirectIncome } from "./codatdatacontractsdatasetsdirectincome";



// CodatDataContractsDatasetsDirectIncomePagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsDirectIncomePagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsDirectIncomePagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsDirectIncome })
  results?: CodatDataContractsDatasetsDirectIncome[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
