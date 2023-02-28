import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankStatementLinePagedResponseHrefModel } from "./codatdatacontractsdatasetsbankstatementlinepagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsBankStatementLinePagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsBankStatementLinePagedResponseHrefModel)
  current?: CodatDataContractsDatasetsBankStatementLinePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsBankStatementLinePagedResponseHrefModel)
  next?: CodatDataContractsDatasetsBankStatementLinePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsBankStatementLinePagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsBankStatementLinePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsBankStatementLinePagedResponseHrefModel)
  self?: CodatDataContractsDatasetsBankStatementLinePagedResponseHrefModel;
}