import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataIntegrityContractsMetadataMatchMetadata } from "./codatdataintegritycontractsmetadatamatchmetadata";


export class CodatDataIntegrityContractsMetadataMatchMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata", elemType: CodatDataIntegrityContractsMetadataMatchMetadata })
  metadata?: CodatDataIntegrityContractsMetadataMatchMetadata[];
}