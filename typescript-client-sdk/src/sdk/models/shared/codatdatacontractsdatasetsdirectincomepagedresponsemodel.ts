import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsDirectIncome } from "./codatdatacontractsdatasetsdirectincome";
import { CodatDataContractsDatasetsDirectIncomePagedResponseLinksModel } from "./codatdatacontractsdatasetsdirectincomepagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsDirectIncomePagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsDirectIncomePagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsDirectIncomePagedResponseLinksModel)
  links?: CodatDataContractsDatasetsDirectIncomePagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsDirectIncome })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsDirectIncome)
  results?: CodatDataContractsDatasetsDirectIncome[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}