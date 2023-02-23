import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsDirectCostIdAttachmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=directCostId" })
  directCostId: string;
}

export class PostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsDirectCostIdAttachmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class PostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsDirectCostIdAttachmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsDirectCostIdAttachmentPathParams;

  @SpeakeasyMetadata()
  security: PostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsDirectCostIdAttachmentSecurity;
}

export class PostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsDirectCostIdAttachmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}