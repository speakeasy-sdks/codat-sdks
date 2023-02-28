import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsCompanyDataConnectionPagedResponseHrefModel } from "./codatpublicapimodelscompanydataconnectionpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatPublicApiModelsCompanyDataConnectionPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatPublicApiModelsCompanyDataConnectionPagedResponseHrefModel)
  current?: CodatPublicApiModelsCompanyDataConnectionPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatPublicApiModelsCompanyDataConnectionPagedResponseHrefModel)
  next?: CodatPublicApiModelsCompanyDataConnectionPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatPublicApiModelsCompanyDataConnectionPagedResponseHrefModel)
  previous?: CodatPublicApiModelsCompanyDataConnectionPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatPublicApiModelsCompanyDataConnectionPagedResponseHrefModel)
  self?: CodatPublicApiModelsCompanyDataConnectionPagedResponseHrefModel;
}