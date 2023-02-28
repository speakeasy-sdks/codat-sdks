import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataIntegrityContractsMetadataMatchMetadata } from "./codatdataintegritycontractsmetadatamatchmetadata";
import { Expose, Type } from "class-transformer";


export class CodatDataIntegrityContractsMetadataMatchMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatDataIntegrityContractsMetadataMatchMetadata })
  @Expose({ name: "metadata" })
  @Type(() => CodatDataIntegrityContractsMetadataMatchMetadata)
  metadata?: CodatDataIntegrityContractsMetadataMatchMetadata[];
}