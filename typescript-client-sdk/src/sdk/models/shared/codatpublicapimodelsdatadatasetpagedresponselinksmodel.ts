import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsDataDataSetPagedResponseHrefModel } from "./codatpublicapimodelsdatadatasetpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatPublicApiModelsDataDataSetPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatPublicApiModelsDataDataSetPagedResponseHrefModel)
  current?: CodatPublicApiModelsDataDataSetPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatPublicApiModelsDataDataSetPagedResponseHrefModel)
  next?: CodatPublicApiModelsDataDataSetPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatPublicApiModelsDataDataSetPagedResponseHrefModel)
  previous?: CodatPublicApiModelsDataDataSetPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatPublicApiModelsDataDataSetPagedResponseHrefModel)
  self?: CodatPublicApiModelsDataDataSetPagedResponseHrefModel;
}