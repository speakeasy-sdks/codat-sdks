import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsCompanyCompanyPagedResponseHrefModel } from "./codatpublicapimodelscompanycompanypagedresponsehrefmodel";


export class CodatPublicApiModelsCompanyCompanyPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: CodatPublicApiModelsCompanyCompanyPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: CodatPublicApiModelsCompanyCompanyPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: CodatPublicApiModelsCompanyCompanyPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: CodatPublicApiModelsCompanyCompanyPagedResponseHrefModel;
}