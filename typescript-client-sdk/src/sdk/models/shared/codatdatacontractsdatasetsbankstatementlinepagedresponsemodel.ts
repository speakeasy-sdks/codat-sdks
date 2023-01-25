import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankStatementLinePagedResponseLinksModel } from "./codatdatacontractsdatasetsbankstatementlinepagedresponselinksmodel";
import { CodatDataContractsDatasetsBankStatementLine } from "./codatdatacontractsdatasetsbankstatementline";



// CodatDataContractsDatasetsBankStatementLinePagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsBankStatementLinePagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsBankStatementLinePagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsBankStatementLine })
  results?: CodatDataContractsDatasetsBankStatementLine[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
