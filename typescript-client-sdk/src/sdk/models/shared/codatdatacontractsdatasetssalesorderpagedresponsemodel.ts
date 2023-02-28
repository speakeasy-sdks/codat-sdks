import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsSalesOrder } from "./codatdatacontractsdatasetssalesorder";
import { CodatDataContractsDatasetsSalesOrderPagedResponseLinksModel } from "./codatdatacontractsdatasetssalesorderpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsSalesOrderPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsSalesOrderPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsSalesOrderPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsSalesOrderPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsSalesOrder })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsSalesOrder)
  results?: CodatDataContractsDatasetsSalesOrder[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}