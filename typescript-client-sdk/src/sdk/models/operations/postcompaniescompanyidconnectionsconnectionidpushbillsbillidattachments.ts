import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdAttachmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billId" })
  billId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}


export class PostCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdAttachmentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PostCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdAttachmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdAttachmentsPathParams;

  @SpeakeasyMetadata()
  security: PostCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdAttachmentsSecurity;
}


export class PostCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
