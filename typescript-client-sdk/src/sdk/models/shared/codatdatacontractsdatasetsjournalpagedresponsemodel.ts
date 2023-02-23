import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsJournal } from "./codatdatacontractsdatasetsjournal";
import { CodatDataContractsDatasetsJournalPagedResponseLinksModel } from "./codatdatacontractsdatasetsjournalpagedresponselinksmodel";


// CodatDataContractsDatasetsJournalPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsJournalPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsJournalPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsJournal })
  results?: CodatDataContractsDatasetsJournal[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}