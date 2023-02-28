import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CodatDataIntegrityContractsMetadataMatchConnectionIds extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "target" })
  target?: string[];
}