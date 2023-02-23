import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsClientsIntegrationBrandingModelFullModel } from "./codatpublicapimodelsclientsintegrationbrandingmodelfullmodel";
import { CodatPublicApiModelsClientsIntegrationBrandingModelSquareModel } from "./codatpublicapimodelsclientsintegrationbrandingmodelsquaremodel";


export class CodatPublicApiModelsClientsIntegrationBrandingModelLogoModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=full" })
  full?: CodatPublicApiModelsClientsIntegrationBrandingModelFullModel;

  @SpeakeasyMetadata({ data: "json, name=square" })
  square?: CodatPublicApiModelsClientsIntegrationBrandingModelSquareModel;
}