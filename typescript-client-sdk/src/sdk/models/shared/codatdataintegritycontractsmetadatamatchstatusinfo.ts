import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataIntegrityContractsMetadataRunStatusEnum } from "./codatdataintegritycontractsmetadatarunstatusenum";
import { Expose, Transform } from "class-transformer";


export class CodatDataIntegrityContractsMetadataMatchStatusInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "currentStatus" })
  currentStatus?: CodatDataIntegrityContractsMetadataRunStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "lastMatched" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastMatched?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "statusMessage" })
  statusMessage?: string;
}