import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatDataContractsDatasetsTaxRateComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isCompound" })
  isCompound: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: number;
}