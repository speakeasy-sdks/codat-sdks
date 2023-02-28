import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankAccountPagedResponseHrefModel } from "./codatdatacontractsdatasetsbankaccountpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsBankAccountPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsBankAccountPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsBankAccountPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsBankAccountPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsBankAccountPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsBankAccountPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsBankAccountPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsBankAccountPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsBankAccountPagedResponseHrefModel;
}