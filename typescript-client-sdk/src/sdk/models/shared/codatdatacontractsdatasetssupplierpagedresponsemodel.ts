import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsSupplierPagedResponseLinksModel } from "./codatdatacontractsdatasetssupplierpagedresponselinksmodel";
import { CodatDataContractsDatasetsSupplier } from "./codatdatacontractsdatasetssupplier";



// CodatDataContractsDatasetsSupplierPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsSupplierPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsSupplierPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsSupplier })
  results?: CodatDataContractsDatasetsSupplier[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
