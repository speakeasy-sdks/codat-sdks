import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsPurchaseOrder } from "./codatdatacontractsdatasetspurchaseorder";
import { CodatDataContractsDatasetsPurchaseOrderPagedResponseLinksModel } from "./codatdatacontractsdatasetspurchaseorderpagedresponselinksmodel";


// CodatDataContractsDatasetsPurchaseOrderPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsPurchaseOrderPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsPurchaseOrderPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsPurchaseOrder })
  results?: CodatDataContractsDatasetsPurchaseOrder[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}