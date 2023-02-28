import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsClientsIntegrationBrandingModelDefaultModel } from "./codatpublicapimodelsclientsintegrationbrandingmodeldefaultmodel";
import { CodatPublicApiModelsClientsIntegrationBrandingModelHoverModel } from "./codatpublicapimodelsclientsintegrationbrandingmodelhovermodel";
import { Expose, Type } from "class-transformer";


export class CodatPublicApiModelsClientsIntegrationBrandingModelButtonModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "default" })
  @Type(() => CodatPublicApiModelsClientsIntegrationBrandingModelDefaultModel)
  default?: CodatPublicApiModelsClientsIntegrationBrandingModelDefaultModel;

  @SpeakeasyMetadata()
  @Expose({ name: "hover" })
  @Type(() => CodatPublicApiModelsClientsIntegrationBrandingModelHoverModel)
  hover?: CodatPublicApiModelsClientsIntegrationBrandingModelHoverModel;
}