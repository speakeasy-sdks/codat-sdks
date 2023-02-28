import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsDirectCost } from "./codatdatacontractsdatasetsdirectcost";
import { CodatDataContractsDatasetsDirectCostPagedResponseLinksModel } from "./codatdatacontractsdatasetsdirectcostpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsDirectCostPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsDirectCostPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsDirectCostPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsDirectCostPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsDirectCost })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsDirectCost)
  results?: CodatDataContractsDatasetsDirectCost[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}