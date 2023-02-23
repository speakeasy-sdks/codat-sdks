import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCreditNote } from "./codatdatacontractsdatasetscreditnote";
import { CodatDataContractsDatasetsCreditNotePagedResponseLinksModel } from "./codatdatacontractsdatasetscreditnotepagedresponselinksmodel";


// CodatDataContractsDatasetsCreditNotePagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsCreditNotePagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsCreditNotePagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsCreditNote })
  results?: CodatDataContractsDatasetsCreditNote[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}