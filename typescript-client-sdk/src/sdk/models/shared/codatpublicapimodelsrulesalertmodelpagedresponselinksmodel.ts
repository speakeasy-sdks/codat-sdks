import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsRulesAlertModelPagedResponseHrefModel } from "./codatpublicapimodelsrulesalertmodelpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatPublicApiModelsRulesAlertModelPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatPublicApiModelsRulesAlertModelPagedResponseHrefModel)
  current?: CodatPublicApiModelsRulesAlertModelPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatPublicApiModelsRulesAlertModelPagedResponseHrefModel)
  next?: CodatPublicApiModelsRulesAlertModelPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatPublicApiModelsRulesAlertModelPagedResponseHrefModel)
  previous?: CodatPublicApiModelsRulesAlertModelPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatPublicApiModelsRulesAlertModelPagedResponseHrefModel)
  self?: CodatPublicApiModelsRulesAlertModelPagedResponseHrefModel;
}