import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsDataDataSetPagedResponseHrefModel } from "./codatpublicapimodelsdatadatasetpagedresponsehrefmodel";


export class CodatPublicApiModelsDataDataSetPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: CodatPublicApiModelsDataDataSetPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: CodatPublicApiModelsDataDataSetPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: CodatPublicApiModelsDataDataSetPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: CodatPublicApiModelsDataDataSetPagedResponseHrefModel;
}