import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SystemObjectPushOperation } from "./systemobjectpushoperation";
import { SystemObjectPushOperationPagedResponseLinksModel } from "./systemobjectpushoperationpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// SystemObjectPushOperationPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class SystemObjectPushOperationPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => SystemObjectPushOperationPagedResponseLinksModel)
  links?: SystemObjectPushOperationPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: SystemObjectPushOperation })
  @Expose({ name: "results" })
  @Type(() => SystemObjectPushOperation)
  results?: SystemObjectPushOperation[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}