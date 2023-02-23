import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billCreditNoteId" })
  billCreditNoteId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdPathParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdSecurity;
}

export class GetCompaniesCompanyIdDataBillCreditNotesBillCreditNoteIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsBillCreditNote?: shared.CodatDataContractsDatasetsBillCreditNote;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}