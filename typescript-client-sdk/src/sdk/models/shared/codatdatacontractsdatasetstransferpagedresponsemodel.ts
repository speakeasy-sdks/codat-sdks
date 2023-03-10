import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsTransferPagedResponseLinksModel } from "./codatdatacontractsdatasetstransferpagedresponselinksmodel";
import { CodatDataContractsDatasetsTransfer } from "./codatdatacontractsdatasetstransfer";



// CodatDataContractsDatasetsTransferPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsTransferPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsTransferPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsTransfer })
  results?: CodatDataContractsDatasetsTransfer[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
