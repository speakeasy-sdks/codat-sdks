import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsRulesNotifiers } from "./codatpublicapimodelsrulesnotifiers";


export class CodatPublicApiModelsRulesAddRuleModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "json, name=notifiers" })
  notifiers?: CodatPublicApiModelsRulesNotifiers;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}