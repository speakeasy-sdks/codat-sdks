import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesDirectIncomeIdAttachmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=directIncomeId" })
  directIncomeId: string;
}


export class PostCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesDirectIncomeIdAttachmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PostCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesDirectIncomeIdAttachmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesDirectIncomeIdAttachmentPathParams;

  @SpeakeasyMetadata()
  security: PostCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesDirectIncomeIdAttachmentSecurity;
}


export class PostCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesDirectIncomeIdAttachmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
