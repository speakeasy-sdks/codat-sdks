import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsTaxRate } from "./codatdatacontractsdatasetstaxrate";
import { CodatDataContractsDatasetsTaxRatePagedResponseLinksModel } from "./codatdatacontractsdatasetstaxratepagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsTaxRatePagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsTaxRatePagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsTaxRatePagedResponseLinksModel)
  links?: CodatDataContractsDatasetsTaxRatePagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsTaxRate })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsTaxRate)
  results?: CodatDataContractsDatasetsTaxRate[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}