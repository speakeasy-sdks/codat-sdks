import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsRulesNotifiers } from "./codatpublicapimodelsrulesnotifiers";
import { Expose, Type } from "class-transformer";


export class CodatPublicApiModelsRulesAddRuleModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "notifiers" })
  @Type(() => CodatPublicApiModelsRulesNotifiers)
  notifiers?: CodatPublicApiModelsRulesNotifiers;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}