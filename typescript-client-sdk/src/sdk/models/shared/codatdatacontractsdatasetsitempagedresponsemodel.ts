import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsItem } from "./codatdatacontractsdatasetsitem";
import { CodatDataContractsDatasetsItemPagedResponseLinksModel } from "./codatdatacontractsdatasetsitempagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsItemPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsItemPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsItemPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsItemPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsItem })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsItem)
  results?: CodatDataContractsDatasetsItem[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}