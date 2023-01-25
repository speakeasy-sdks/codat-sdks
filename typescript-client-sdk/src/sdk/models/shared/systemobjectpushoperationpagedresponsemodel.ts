import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SystemObjectPushOperationPagedResponseLinksModel } from "./systemobjectpushoperationpagedresponselinksmodel";
import { SystemObjectPushOperation } from "./systemobjectpushoperation";



// SystemObjectPushOperationPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class SystemObjectPushOperationPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: SystemObjectPushOperationPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: SystemObjectPushOperation })
  results?: SystemObjectPushOperation[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
