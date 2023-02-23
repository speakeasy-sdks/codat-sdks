import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBillCreditNote } from "./codatdatacontractsdatasetsbillcreditnote";
import { CodatDataContractsDatasetsBillCreditNotePagedResponseLinksModel } from "./codatdatacontractsdatasetsbillcreditnotepagedresponselinksmodel";


// CodatDataContractsDatasetsBillCreditNotePagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsBillCreditNotePagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsBillCreditNotePagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsBillCreditNote })
  results?: CodatDataContractsDatasetsBillCreditNote[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}