import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMetricsCompaniesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetMetricsCompaniesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetMetricsCompaniesSecurity;
}


export class GetMetricsCompaniesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsClientsClientCompanyMetricsModel?: shared.CodatPublicApiModelsClientsClientCompanyMetricsModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
