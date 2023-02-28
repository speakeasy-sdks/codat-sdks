import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCreditNote } from "./codatdatacontractsdatasetscreditnote";
import { CodatDataContractsDatasetsCreditNotePagedResponseLinksModel } from "./codatdatacontractsdatasetscreditnotepagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsCreditNotePagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsCreditNotePagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsCreditNotePagedResponseLinksModel)
  links?: CodatDataContractsDatasetsCreditNotePagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCreditNote })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsCreditNote)
  results?: CodatDataContractsDatasetsCreditNote[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}