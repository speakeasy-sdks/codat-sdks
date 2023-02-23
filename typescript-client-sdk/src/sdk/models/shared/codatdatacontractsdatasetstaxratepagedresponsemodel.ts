import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsTaxRate } from "./codatdatacontractsdatasetstaxrate";
import { CodatDataContractsDatasetsTaxRatePagedResponseLinksModel } from "./codatdatacontractsdatasetstaxratepagedresponselinksmodel";


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