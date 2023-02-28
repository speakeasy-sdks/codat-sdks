import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataIntegrityContractsMetadataMatchAmountInfo } from "./codatdataintegritycontractsmetadatamatchamountinfo";
import { CodatDataIntegrityContractsMetadataMatchConnectionIds } from "./codatdataintegritycontractsmetadatamatchconnectionids";
import { CodatDataIntegrityContractsMetadataMatchDateInfo } from "./codatdataintegritycontractsmetadatamatchdateinfo";
import { CodatDataIntegrityContractsMetadataMatchStatusInfo } from "./codatdataintegritycontractsmetadatamatchstatusinfo";
import { Expose, Type } from "class-transformer";


export class CodatDataIntegrityContractsMetadataMatchMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amounts" })
  @Type(() => CodatDataIntegrityContractsMetadataMatchAmountInfo)
  amounts?: CodatDataIntegrityContractsMetadataMatchAmountInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "connectionIds" })
  @Type(() => CodatDataIntegrityContractsMetadataMatchConnectionIds)
  connectionIds?: CodatDataIntegrityContractsMetadataMatchConnectionIds;

  @SpeakeasyMetadata()
  @Expose({ name: "dates" })
  @Type(() => CodatDataIntegrityContractsMetadataMatchDateInfo)
  dates?: CodatDataIntegrityContractsMetadataMatchDateInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "statusInfo" })
  @Type(() => CodatDataIntegrityContractsMetadataMatchStatusInfo)
  statusInfo?: CodatDataIntegrityContractsMetadataMatchStatusInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}