import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsDataInterfacesSupplementalData } from "./codatdatacontractsdatasetsdatainterfacessupplementaldata";
import { CodatDataContractsDatasetsJournalLine } from "./codatdatacontractsdatasetsjournalline";
import { CodatDataContractsDatasetsJournalRef } from "./codatdatacontractsdatasetsjournalref";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";
import { CodatDataContractsDatasetsRecordRef } from "./codatdatacontractsdatasetsrecordref";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsJournalEntry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdOn?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsJournalLine })
  @Expose({ name: "journalLines" })
  @Type(() => CodatDataContractsDatasetsJournalLine)
  journalLines?: CodatDataContractsDatasetsJournalLine[];

  @SpeakeasyMetadata()
  @Expose({ name: "journalRef" })
  @Type(() => CodatDataContractsDatasetsJournalRef)
  journalRef?: CodatDataContractsDatasetsJournalRef;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CodatDataContractsDatasetsMetadata)
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "postedOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  postedOn?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => CodatDataContractsDatasetsRecordRef)
  recordRef?: CodatDataContractsDatasetsRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => CodatDataContractsDatasetsDataInterfacesSupplementalData)
  supplementalData?: CodatDataContractsDatasetsDataInterfacesSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedOn?: Date;
}