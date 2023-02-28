import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAttachmentsDatasetAttachment } from "./codatdatacontractsdatasetsattachmentsdatasetattachment";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsAttachmentsDataset extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsAttachmentsDatasetAttachment })
  @Expose({ name: "attachments" })
  @Type(() => CodatDataContractsDatasetsAttachmentsDatasetAttachment)
  attachments?: CodatDataContractsDatasetsAttachmentsDatasetAttachment[];
}