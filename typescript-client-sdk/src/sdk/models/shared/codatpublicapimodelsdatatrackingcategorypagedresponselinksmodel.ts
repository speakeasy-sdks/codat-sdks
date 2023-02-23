import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsDataTrackingCategoryPagedResponseHrefModel } from "./codatpublicapimodelsdatatrackingcategorypagedresponsehrefmodel";


export class CodatPublicApiModelsDataTrackingCategoryPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: CodatPublicApiModelsDataTrackingCategoryPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: CodatPublicApiModelsDataTrackingCategoryPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: CodatPublicApiModelsDataTrackingCategoryPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: CodatPublicApiModelsDataTrackingCategoryPagedResponseHrefModel;
}