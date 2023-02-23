import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsRulesRule } from "./codatpublicapimodelsrulesrule";
import { CodatPublicApiModelsRulesRulePagedResponseLinksModel } from "./codatpublicapimodelsrulesrulepagedresponselinksmodel";


// CodatPublicApiModelsRulesRulePagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatPublicApiModelsRulesRulePagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatPublicApiModelsRulesRulePagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatPublicApiModelsRulesRule })
  results?: CodatPublicApiModelsRulesRule[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}