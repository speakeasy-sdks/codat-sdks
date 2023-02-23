import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetCompaniesCompanyIdDataJournalEntriesJournalEntryIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=journalEntryId" })
  journalEntryId: string;
}

export class GetCompaniesCompanyIdDataJournalEntriesJournalEntryIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetCompaniesCompanyIdDataJournalEntriesJournalEntryIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdDataJournalEntriesJournalEntryIdPathParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdDataJournalEntriesJournalEntryIdSecurity;
}

export class GetCompaniesCompanyIdDataJournalEntriesJournalEntryIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsJournalEntry?: shared.CodatDataContractsDatasetsJournalEntry;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}