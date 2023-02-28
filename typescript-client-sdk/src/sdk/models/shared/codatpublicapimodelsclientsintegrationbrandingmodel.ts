import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsClientsIntegrationBrandingModelButtonModel } from "./codatpublicapimodelsclientsintegrationbrandingmodelbuttonmodel";
import { CodatPublicApiModelsClientsIntegrationBrandingModelLogoModel } from "./codatpublicapimodelsclientsintegrationbrandingmodellogomodel";
import { Expose, Type } from "class-transformer";


export class CodatPublicApiModelsClientsIntegrationBrandingModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "button" })
  @Type(() => CodatPublicApiModelsClientsIntegrationBrandingModelButtonModel)
  button?: CodatPublicApiModelsClientsIntegrationBrandingModelButtonModel;

  @SpeakeasyMetadata()
  @Expose({ name: "logo" })
  @Type(() => CodatPublicApiModelsClientsIntegrationBrandingModelLogoModel)
  logo?: CodatPublicApiModelsClientsIntegrationBrandingModelLogoModel;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceId" })
  sourceId?: string;
}