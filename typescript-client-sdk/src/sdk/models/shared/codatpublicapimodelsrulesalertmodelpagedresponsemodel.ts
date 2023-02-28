import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsRulesAlertModel } from "./codatpublicapimodelsrulesalertmodel";
import { CodatPublicApiModelsRulesAlertModelPagedResponseLinksModel } from "./codatpublicapimodelsrulesalertmodelpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatPublicApiModelsRulesAlertModelPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatPublicApiModelsRulesAlertModelPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatPublicApiModelsRulesAlertModelPagedResponseLinksModel)
  links?: CodatPublicApiModelsRulesAlertModelPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatPublicApiModelsRulesAlertModel })
  @Expose({ name: "results" })
  @Type(() => CodatPublicApiModelsRulesAlertModel)
  results?: CodatPublicApiModelsRulesAlertModel[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}