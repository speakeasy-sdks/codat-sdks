import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsPurchaseOrder } from "./codatdatacontractsdatasetspurchaseorder";
import { CodatDataContractsDatasetsPurchaseOrderPagedResponseLinksModel } from "./codatdatacontractsdatasetspurchaseorderpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsPurchaseOrderPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsPurchaseOrderPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsPurchaseOrderPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsPurchaseOrderPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsPurchaseOrder })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsPurchaseOrder)
  results?: CodatDataContractsDatasetsPurchaseOrder[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}