import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataIntegrityContractsMetadataMatchAmountInfo } from "./codatdataintegritycontractsmetadatamatchamountinfo";
import { CodatDataIntegrityContractsMetadataMatchConnectionIds } from "./codatdataintegritycontractsmetadatamatchconnectionids";
import { CodatDataIntegrityContractsMetadataMatchDateInfo } from "./codatdataintegritycontractsmetadatamatchdateinfo";
import { CodatDataIntegrityContractsMetadataMatchStatusInfo } from "./codatdataintegritycontractsmetadatamatchstatusinfo";


export class CodatDataIntegrityContractsMetadataMatchMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amounts" })
  amounts?: CodatDataIntegrityContractsMetadataMatchAmountInfo;

  @SpeakeasyMetadata({ data: "json, name=connectionIds" })
  connectionIds?: CodatDataIntegrityContractsMetadataMatchConnectionIds;

  @SpeakeasyMetadata({ data: "json, name=dates" })
  dates?: CodatDataIntegrityContractsMetadataMatchDateInfo;

  @SpeakeasyMetadata({ data: "json, name=statusInfo" })
  statusInfo?: CodatDataIntegrityContractsMetadataMatchStatusInfo;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}