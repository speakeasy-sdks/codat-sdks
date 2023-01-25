import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteCompaniesCompanyIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class DeleteCompaniesCompanyIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class DeleteCompaniesCompanyIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCompaniesCompanyIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteCompaniesCompanyIdSecurity;
}


export class DeleteCompaniesCompanyIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
