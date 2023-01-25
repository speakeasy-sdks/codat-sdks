import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatPublicApiModelsRulesAlertModelPagedResponseLinksModel } from "./codatpublicapimodelsrulesalertmodelpagedresponselinksmodel";
import { CodatPublicApiModelsRulesAlertModel } from "./codatpublicapimodelsrulesalertmodel";



// CodatPublicApiModelsRulesAlertModelPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatPublicApiModelsRulesAlertModelPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatPublicApiModelsRulesAlertModelPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatPublicApiModelsRulesAlertModel })
  results?: CodatPublicApiModelsRulesAlertModel[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
