import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsInvoice } from "./codatdatacontractsdatasetsinvoice";
import { CodatDataContractsDatasetsInvoicePagedResponseLinksModel } from "./codatdatacontractsdatasetsinvoicepagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsInvoicePagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsInvoicePagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsInvoicePagedResponseLinksModel)
  links?: CodatDataContractsDatasetsInvoicePagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsInvoice })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsInvoice)
  results?: CodatDataContractsDatasetsInvoice[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}