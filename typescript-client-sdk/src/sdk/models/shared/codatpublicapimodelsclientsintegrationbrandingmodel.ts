import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatPublicApiModelsClientsIntegrationBrandingModelButtonModel } from "./codatpublicapimodelsclientsintegrationbrandingmodelbuttonmodel";
import { CodatPublicApiModelsClientsIntegrationBrandingModelLogoModel } from "./codatpublicapimodelsclientsintegrationbrandingmodellogomodel";



export class CodatPublicApiModelsClientsIntegrationBrandingModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=button" })
  button?: CodatPublicApiModelsClientsIntegrationBrandingModelButtonModel;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: CodatPublicApiModelsClientsIntegrationBrandingModelLogoModel;

  @SpeakeasyMetadata({ data: "json, name=sourceId" })
  sourceId?: string;
}
