import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PostCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdAttachmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoiceId" })
  invoiceId: string;
}

export class PostCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdAttachmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class PostCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdAttachmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdAttachmentPathParams;

  @SpeakeasyMetadata()
  security: PostCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdAttachmentSecurity;
}

export class PostCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdAttachmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}