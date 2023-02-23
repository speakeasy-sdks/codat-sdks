import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatDataIntegrityContractsMetadataMatchConnectionIds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string[];

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string[];
}