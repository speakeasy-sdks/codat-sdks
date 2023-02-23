import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsRulesAlertModelPagedResponseHrefModel } from "./codatpublicapimodelsrulesalertmodelpagedresponsehrefmodel";


export class CodatPublicApiModelsRulesAlertModelPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: CodatPublicApiModelsRulesAlertModelPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: CodatPublicApiModelsRulesAlertModelPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: CodatPublicApiModelsRulesAlertModelPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: CodatPublicApiModelsRulesAlertModelPagedResponseHrefModel;
}