import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankingAccountPagedResponseHrefModel } from "./codatdatacontractsdatasetsbankingaccountpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsBankingAccountPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsBankingAccountPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsBankingAccountPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsBankingAccountPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsBankingAccountPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsBankingAccountPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsBankingAccountPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsBankingAccountPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsBankingAccountPagedResponseHrefModel;
}