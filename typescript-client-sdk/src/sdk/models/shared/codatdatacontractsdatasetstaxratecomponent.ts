import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CodatDataContractsDatasetsTaxRateComponent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isCompound" })
  isCompound: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "rate" })
  rate?: number;
}