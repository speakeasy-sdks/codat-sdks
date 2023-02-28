import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsPurchaseOrderPagedResponseHrefModel } from "./codatdatacontractsdatasetspurchaseorderpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsPurchaseOrderPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsPurchaseOrderPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsPurchaseOrderPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsPurchaseOrderPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsPurchaseOrderPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsPurchaseOrderPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsPurchaseOrderPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsPurchaseOrderPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsPurchaseOrderPagedResponseHrefModel;
}