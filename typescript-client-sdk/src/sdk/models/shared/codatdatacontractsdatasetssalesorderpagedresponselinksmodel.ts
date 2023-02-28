import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsSalesOrderPagedResponseHrefModel } from "./codatdatacontractsdatasetssalesorderpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsSalesOrderPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsSalesOrderPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsSalesOrderPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsSalesOrderPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsSalesOrderPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsSalesOrderPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsSalesOrderPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsSalesOrderPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsSalesOrderPagedResponseHrefModel;
}