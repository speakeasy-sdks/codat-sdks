import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PostCompaniesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class PostCompaniesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CodatPublicApiModelsCompanyAddCompanyModel;

  @SpeakeasyMetadata()
  security: PostCompaniesSecurity;
}

export class PostCompaniesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsCompanyCompany?: shared.CodatPublicApiModelsCompanyCompany;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}