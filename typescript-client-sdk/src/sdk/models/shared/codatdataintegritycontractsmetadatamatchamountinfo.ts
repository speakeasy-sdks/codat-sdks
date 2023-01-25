import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CodatDataIntegrityContractsMetadataMatchAmountInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: number;
}
