import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PutCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billCreditNoteId" })
  billCreditNoteId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PutCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceUpdate" })
  forceUpdate?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}

export class PutCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class PutCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PutCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CodatDataContractsDatasetsBillCreditNote;

  @SpeakeasyMetadata()
  security: PutCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdSecurity;
}

export class PutCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsBillCreditNotePushOperation?: shared.CodatDataContractsDatasetsBillCreditNotePushOperation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}