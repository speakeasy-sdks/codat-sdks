import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsPushPushOperationRecordRef } from "./codatdatacontractspushpushoperationrecordref";
import { CodatDataContractsPushPushChangeTypeEnum } from "./codatdatacontractspushpushchangetypeenum";



export class CodatDataContractsPushPushOperationChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=recordRef" })
  recordRef?: CodatDataContractsPushPushOperationRecordRef;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CodatDataContractsPushPushChangeTypeEnum;
}
