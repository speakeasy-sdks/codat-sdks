import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankAccount } from "./codatdatacontractsdatasetsbankaccount";
import { CodatDataContractsDatasetsBankAccountPagedResponseLinksModel } from "./codatdatacontractsdatasetsbankaccountpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsBankAccountPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsBankAccountPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsBankAccountPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsBankAccountPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsBankAccount })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsBankAccount)
  results?: CodatDataContractsDatasetsBankAccount[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}