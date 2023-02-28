import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsSupplier } from "./codatdatacontractsdatasetssupplier";
import { CodatDataContractsDatasetsSupplierPagedResponseLinksModel } from "./codatdatacontractsdatasetssupplierpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsSupplierPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsSupplierPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsSupplierPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsSupplierPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsSupplier })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsSupplier)
  results?: CodatDataContractsDatasetsSupplier[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}