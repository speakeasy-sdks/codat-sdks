import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBillPagedResponseHrefModel } from "./codatdatacontractsdatasetsbillpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsBillPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsBillPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsBillPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsBillPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsBillPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsBillPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsBillPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsBillPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsBillPagedResponseHrefModel;
}