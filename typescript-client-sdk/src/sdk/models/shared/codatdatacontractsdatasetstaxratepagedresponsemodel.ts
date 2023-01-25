import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsTaxRatePagedResponseLinksModel } from "./codatdatacontractsdatasetstaxratepagedresponselinksmodel";
import { CodatDataContractsDatasetsTaxRate } from "./codatdatacontractsdatasetstaxrate";



// CodatDataContractsDatasetsTaxRatePagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsTaxRatePagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsTaxRatePagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsTaxRate })
  results?: CodatDataContractsDatasetsTaxRate[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
