import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsRulesRule } from "./codatpublicapimodelsrulesrule";
import { CodatPublicApiModelsRulesRulePagedResponseLinksModel } from "./codatpublicapimodelsrulesrulepagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatPublicApiModelsRulesRulePagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatPublicApiModelsRulesRulePagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatPublicApiModelsRulesRulePagedResponseLinksModel)
  links?: CodatPublicApiModelsRulesRulePagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatPublicApiModelsRulesRule })
  @Expose({ name: "results" })
  @Type(() => CodatPublicApiModelsRulesRule)
  results?: CodatPublicApiModelsRulesRule[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}