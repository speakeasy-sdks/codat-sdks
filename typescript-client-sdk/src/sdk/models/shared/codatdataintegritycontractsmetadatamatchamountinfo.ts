import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CodatDataIntegrityContractsMetadataMatchAmountInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "max" })
  max?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "min" })
  min?: number;
}