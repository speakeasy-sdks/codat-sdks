import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsJournalStatusEnum } from "./codatdatacontractsdatasetsjournalstatusenum";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";


export class CodatDataContractsDatasetsJournal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=hasChildren" })
  hasChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=journalCode" })
  journalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CodatDataContractsDatasetsJournalStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}