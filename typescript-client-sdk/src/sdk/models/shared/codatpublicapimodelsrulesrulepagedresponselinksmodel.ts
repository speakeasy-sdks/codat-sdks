import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsRulesRulePagedResponseHrefModel } from "./codatpublicapimodelsrulesrulepagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatPublicApiModelsRulesRulePagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatPublicApiModelsRulesRulePagedResponseHrefModel)
  current?: CodatPublicApiModelsRulesRulePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatPublicApiModelsRulesRulePagedResponseHrefModel)
  next?: CodatPublicApiModelsRulesRulePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatPublicApiModelsRulesRulePagedResponseHrefModel)
  previous?: CodatPublicApiModelsRulesRulePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatPublicApiModelsRulesRulePagedResponseHrefModel)
  self?: CodatPublicApiModelsRulesRulePagedResponseHrefModel;
}