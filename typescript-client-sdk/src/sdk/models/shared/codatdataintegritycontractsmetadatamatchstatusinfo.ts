import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataIntegrityContractsMetadataRunStatusEnum } from "./codatdataintegritycontractsmetadatarunstatusenum";


export class CodatDataIntegrityContractsMetadataMatchStatusInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentStatus" })
  currentStatus?: CodatDataIntegrityContractsMetadataRunStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=lastMatched" })
  lastMatched?: Date;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;
}