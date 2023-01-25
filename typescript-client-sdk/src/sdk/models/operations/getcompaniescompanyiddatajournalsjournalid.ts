import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCompaniesCompanyIdDataJournalsJournalIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=journalId" })
  journalId: string;
}


export class GetCompaniesCompanyIdDataJournalsJournalIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetCompaniesCompanyIdDataJournalsJournalIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdDataJournalsJournalIdPathParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdDataJournalsJournalIdSecurity;
}


export class GetCompaniesCompanyIdDataJournalsJournalIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsJournalPagedResponseModel?: shared.CodatDataContractsDatasetsJournalPagedResponseModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
