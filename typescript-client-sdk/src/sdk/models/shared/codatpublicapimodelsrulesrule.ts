import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsRulesNotifiers } from "./codatpublicapimodelsrulesnotifiers";
import { Expose, Type } from "class-transformer";


export class CodatPublicApiModelsRulesRule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "notifiers" })
  @Type(() => CodatPublicApiModelsRulesNotifiers)
  notifiers?: CodatPublicApiModelsRulesNotifiers;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}