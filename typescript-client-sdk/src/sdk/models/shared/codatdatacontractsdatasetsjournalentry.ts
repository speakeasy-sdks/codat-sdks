import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsJournalLine } from "./codatdatacontractsdatasetsjournalline";
import { CodatDataContractsDatasetsJournalRef } from "./codatdatacontractsdatasetsjournalref";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";
import { CodatDataContractsDatasetsRecordRef } from "./codatdatacontractsdatasetsrecordref";
import { CodatDataContractsDatasetsDataInterfacesSupplementalData } from "./codatdatacontractsdatasetsdatainterfacessupplementaldata";



export class CodatDataContractsDatasetsJournalEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=journalLines", elemType: CodatDataContractsDatasetsJournalLine })
  journalLines?: CodatDataContractsDatasetsJournalLine[];

  @SpeakeasyMetadata({ data: "json, name=journalRef" })
  journalRef?: CodatDataContractsDatasetsJournalRef;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=postedOn" })
  postedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=recordRef" })
  recordRef?: CodatDataContractsDatasetsRecordRef;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: CodatDataContractsDatasetsDataInterfacesSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=updatedOn" })
  updatedOn?: Date;
}
