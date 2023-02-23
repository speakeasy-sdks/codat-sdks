import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsInvoice } from "./codatdatacontractsdatasetsinvoice";
import { CodatDataContractsDatasetsInvoicePagedResponseLinksModel } from "./codatdatacontractsdatasetsinvoicepagedresponselinksmodel";


// CodatDataContractsDatasetsInvoicePagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsInvoicePagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatDataContractsDatasetsInvoicePagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsInvoice })
  results?: CodatDataContractsDatasetsInvoice[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}