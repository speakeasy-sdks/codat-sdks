import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatPublicApiModelsCompanyDataConnectionPagedResponseHrefModel } from "./codatpublicapimodelscompanydataconnectionpagedresponsehrefmodel";



export class CodatPublicApiModelsCompanyDataConnectionPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: CodatPublicApiModelsCompanyDataConnectionPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: CodatPublicApiModelsCompanyDataConnectionPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: CodatPublicApiModelsCompanyDataConnectionPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: CodatPublicApiModelsCompanyDataConnectionPagedResponseHrefModel;
}
