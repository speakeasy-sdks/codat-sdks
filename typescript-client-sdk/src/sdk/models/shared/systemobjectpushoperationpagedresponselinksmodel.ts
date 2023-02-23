import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SystemObjectPushOperationPagedResponseHrefModel } from "./systemobjectpushoperationpagedresponsehrefmodel";


export class SystemObjectPushOperationPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: SystemObjectPushOperationPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: SystemObjectPushOperationPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: SystemObjectPushOperationPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: SystemObjectPushOperationPagedResponseHrefModel;
}