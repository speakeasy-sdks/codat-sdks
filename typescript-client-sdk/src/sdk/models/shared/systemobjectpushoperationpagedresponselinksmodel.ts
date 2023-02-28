import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SystemObjectPushOperationPagedResponseHrefModel } from "./systemobjectpushoperationpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class SystemObjectPushOperationPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => SystemObjectPushOperationPagedResponseHrefModel)
  current?: SystemObjectPushOperationPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => SystemObjectPushOperationPagedResponseHrefModel)
  next?: SystemObjectPushOperationPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => SystemObjectPushOperationPagedResponseHrefModel)
  previous?: SystemObjectPushOperationPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => SystemObjectPushOperationPagedResponseHrefModel)
  self?: SystemObjectPushOperationPagedResponseHrefModel;
}