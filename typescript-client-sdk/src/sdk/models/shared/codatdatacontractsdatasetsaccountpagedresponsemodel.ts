import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAccount } from "./codatdatacontractsdatasetsaccount";
import { CodatDataContractsDatasetsAccountPagedResponseLinksModel } from "./codatdatacontractsdatasetsaccountpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsAccountPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsAccountPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsAccountPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsAccountPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsAccount })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsAccount)
  results?: CodatDataContractsDatasetsAccount[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}