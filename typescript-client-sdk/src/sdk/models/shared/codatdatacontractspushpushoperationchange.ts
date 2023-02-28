import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsPushPushChangeTypeEnum } from "./codatdatacontractspushpushchangetypeenum";
import { CodatDataContractsPushPushOperationRecordRef } from "./codatdatacontractspushpushoperationrecordref";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsPushPushOperationChange extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recordRef" })
  @Type(() => CodatDataContractsPushPushOperationRecordRef)
  recordRef?: CodatDataContractsPushPushOperationRecordRef;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CodatDataContractsPushPushChangeTypeEnum;
}