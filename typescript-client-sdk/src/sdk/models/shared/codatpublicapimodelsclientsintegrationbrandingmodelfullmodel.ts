import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsClientsIntegrationBrandingModelImageModel } from "./codatpublicapimodelsclientsintegrationbrandingmodelimagemodel";
import { Expose, Type } from "class-transformer";


export class CodatPublicApiModelsClientsIntegrationBrandingModelFullModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "image" })
  @Type(() => CodatPublicApiModelsClientsIntegrationBrandingModelImageModel)
  image?: CodatPublicApiModelsClientsIntegrationBrandingModelImageModel;
}