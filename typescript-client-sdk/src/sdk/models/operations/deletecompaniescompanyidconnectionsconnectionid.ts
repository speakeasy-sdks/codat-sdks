import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class DeleteCompaniesCompanyIdConnectionsConnectionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class DeleteCompaniesCompanyIdConnectionsConnectionIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class DeleteCompaniesCompanyIdConnectionsConnectionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCompaniesCompanyIdConnectionsConnectionIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteCompaniesCompanyIdConnectionsConnectionIdSecurity;
}

export class DeleteCompaniesCompanyIdConnectionsConnectionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteCompaniesCompanyIdConnectionsConnectionId200ApplicationJSONBoolean?: boolean;
}