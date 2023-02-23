import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsPushPushChangeTypeEnum } from "./codatdatacontractspushpushchangetypeenum";
import { CodatDataContractsPushPushOperationRecordRef } from "./codatdatacontractspushpushoperationrecordref";


export class CodatDataContractsPushPushOperationChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=recordRef" })
  recordRef?: CodatDataContractsPushPushOperationRecordRef;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CodatDataContractsPushPushChangeTypeEnum;
}