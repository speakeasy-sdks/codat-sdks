import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankStatementLine } from "./codatdatacontractsdatasetsbankstatementline";
import { CodatDataContractsDatasetsBankStatementLinePagedResponseLinksModel } from "./codatdatacontractsdatasetsbankstatementlinepagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsBankStatementLinePagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsBankStatementLinePagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsBankStatementLinePagedResponseLinksModel)
  links?: CodatDataContractsDatasetsBankStatementLinePagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsBankStatementLine })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsBankStatementLine)
  results?: CodatDataContractsDatasetsBankStatementLine[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}