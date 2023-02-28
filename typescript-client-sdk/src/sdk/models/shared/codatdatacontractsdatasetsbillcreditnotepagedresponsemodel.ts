import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBillCreditNote } from "./codatdatacontractsdatasetsbillcreditnote";
import { CodatDataContractsDatasetsBillCreditNotePagedResponseLinksModel } from "./codatdatacontractsdatasetsbillcreditnotepagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsBillCreditNotePagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsBillCreditNotePagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsBillCreditNotePagedResponseLinksModel)
  links?: CodatDataContractsDatasetsBillCreditNotePagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsBillCreditNote })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsBillCreditNote)
  results?: CodatDataContractsDatasetsBillCreditNote[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}