import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankingAccount } from "./codatdatacontractsdatasetsbankingaccount";
import { CodatDataContractsDatasetsBankingAccountPagedResponseLinksModel } from "./codatdatacontractsdatasetsbankingaccountpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatDataContractsDatasetsBankingAccountPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatDataContractsDatasetsBankingAccountPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatDataContractsDatasetsBankingAccountPagedResponseLinksModel)
  links?: CodatDataContractsDatasetsBankingAccountPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsBankingAccount })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsBankingAccount)
  results?: CodatDataContractsDatasetsBankingAccount[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}