import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsSalesOrderPagedResponseLinksModel } from "./codatdatacontractsdatasetssalesorderpagedresponselinksmodel";
import { CodatDataContractsDatasetsSalesOrder } from "./codatdatacontractsdatasetssalesorder";



// CodatDataContractsDatasetsSalesOrderPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsSalesOrderPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsSalesOrderPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsSalesOrder })
  results?: CodatDataContractsDatasetsSalesOrder[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
