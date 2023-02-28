import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsClientsIntegrationBrandingModelImageModel } from "./codatpublicapimodelsclientsintegrationbrandingmodelimagemodel";
import { Expose, Type } from "class-transformer";


export class CodatPublicApiModelsClientsIntegrationBrandingModelSquareModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "image" })
  @Type(() => CodatPublicApiModelsClientsIntegrationBrandingModelImageModel)
  image?: CodatPublicApiModelsClientsIntegrationBrandingModelImageModel;
}