import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsJournalEntryPagedResponseLinksModel } from "./codatdatacontractsdatasetsjournalentrypagedresponselinksmodel";
import { CodatDataContractsDatasetsJournalEntry } from "./codatdatacontractsdatasetsjournalentry";



// CodatDataContractsDatasetsJournalEntryPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsJournalEntryPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsJournalEntryPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsJournalEntry })
  results?: CodatDataContractsDatasetsJournalEntry[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
