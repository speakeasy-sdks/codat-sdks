import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsDataTrackingCategoryPagedResponseHrefModel } from "./codatpublicapimodelsdatatrackingcategorypagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatPublicApiModelsDataTrackingCategoryPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatPublicApiModelsDataTrackingCategoryPagedResponseHrefModel)
  current?: CodatPublicApiModelsDataTrackingCategoryPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatPublicApiModelsDataTrackingCategoryPagedResponseHrefModel)
  next?: CodatPublicApiModelsDataTrackingCategoryPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatPublicApiModelsDataTrackingCategoryPagedResponseHrefModel)
  previous?: CodatPublicApiModelsDataTrackingCategoryPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatPublicApiModelsDataTrackingCategoryPagedResponseHrefModel)
  self?: CodatPublicApiModelsDataTrackingCategoryPagedResponseHrefModel;
}