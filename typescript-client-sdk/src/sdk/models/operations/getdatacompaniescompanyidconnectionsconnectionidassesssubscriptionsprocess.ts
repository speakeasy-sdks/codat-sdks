import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessPathParams;

  @SpeakeasyMetadata()
  security: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessSecurity;
}


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
