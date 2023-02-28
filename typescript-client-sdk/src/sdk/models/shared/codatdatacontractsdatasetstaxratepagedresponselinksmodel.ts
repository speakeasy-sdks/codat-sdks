import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsTaxRatePagedResponseHrefModel } from "./codatdatacontractsdatasetstaxratepagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsTaxRatePagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsTaxRatePagedResponseHrefModel)
  current?: CodatDataContractsDatasetsTaxRatePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsTaxRatePagedResponseHrefModel)
  next?: CodatDataContractsDatasetsTaxRatePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsTaxRatePagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsTaxRatePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsTaxRatePagedResponseHrefModel)
  self?: CodatDataContractsDatasetsTaxRatePagedResponseHrefModel;
}