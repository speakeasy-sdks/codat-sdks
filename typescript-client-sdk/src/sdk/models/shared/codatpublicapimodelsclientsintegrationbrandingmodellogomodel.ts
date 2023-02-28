import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsClientsIntegrationBrandingModelFullModel } from "./codatpublicapimodelsclientsintegrationbrandingmodelfullmodel";
import { CodatPublicApiModelsClientsIntegrationBrandingModelSquareModel } from "./codatpublicapimodelsclientsintegrationbrandingmodelsquaremodel";
import { Expose, Type } from "class-transformer";


export class CodatPublicApiModelsClientsIntegrationBrandingModelLogoModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "full" })
  @Type(() => CodatPublicApiModelsClientsIntegrationBrandingModelFullModel)
  full?: CodatPublicApiModelsClientsIntegrationBrandingModelFullModel;

  @SpeakeasyMetadata()
  @Expose({ name: "square" })
  @Type(() => CodatPublicApiModelsClientsIntegrationBrandingModelSquareModel)
  square?: CodatPublicApiModelsClientsIntegrationBrandingModelSquareModel;
}