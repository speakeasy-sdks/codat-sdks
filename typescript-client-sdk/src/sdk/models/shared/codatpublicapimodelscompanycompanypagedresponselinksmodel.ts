import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsCompanyCompanyPagedResponseHrefModel } from "./codatpublicapimodelscompanycompanypagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatPublicApiModelsCompanyCompanyPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatPublicApiModelsCompanyCompanyPagedResponseHrefModel)
  current?: CodatPublicApiModelsCompanyCompanyPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatPublicApiModelsCompanyCompanyPagedResponseHrefModel)
  next?: CodatPublicApiModelsCompanyCompanyPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatPublicApiModelsCompanyCompanyPagedResponseHrefModel)
  previous?: CodatPublicApiModelsCompanyCompanyPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatPublicApiModelsCompanyCompanyPagedResponseHrefModel)
  self?: CodatPublicApiModelsCompanyCompanyPagedResponseHrefModel;
}