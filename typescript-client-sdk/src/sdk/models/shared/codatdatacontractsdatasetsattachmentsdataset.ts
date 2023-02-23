import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAttachmentsDatasetAttachment } from "./codatdatacontractsdatasetsattachmentsdatasetattachment";


export class CodatDataContractsDatasetsAttachmentsDataset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: CodatDataContractsDatasetsAttachmentsDatasetAttachment })
  attachments?: CodatDataContractsDatasetsAttachmentsDatasetAttachment[];
}