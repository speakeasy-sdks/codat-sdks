import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatPublicApiModelsClientsIntegrationBrandingModelDefaultModel } from "./codatpublicapimodelsclientsintegrationbrandingmodeldefaultmodel";
import { CodatPublicApiModelsClientsIntegrationBrandingModelHoverModel } from "./codatpublicapimodelsclientsintegrationbrandingmodelhovermodel";



export class CodatPublicApiModelsClientsIntegrationBrandingModelButtonModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default" })
  default?: CodatPublicApiModelsClientsIntegrationBrandingModelDefaultModel;

  @SpeakeasyMetadata({ data: "json, name=hover" })
  hover?: CodatPublicApiModelsClientsIntegrationBrandingModelHoverModel;
}
