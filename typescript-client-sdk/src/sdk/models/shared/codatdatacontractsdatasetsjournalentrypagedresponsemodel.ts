import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsJournalEntry } from "./codatdatacontractsdatasetsjournalentry";
import { CodatDataContractsDatasetsJournalEntryPagedResponseLinksModel } from "./codatdatacontractsdatasetsjournalentrypagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsJournalEntryPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsJournalEntryPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsJournalEntryPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsJournalEntryPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsJournalEntry })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsJournalEntry)
  results?: CodatDataContractsDatasetsJournalEntry[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}