import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetCompaniesCompanyIdDataFinancialsBalanceSheetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCompaniesCompanyIdDataFinancialsBalanceSheetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLength" })
  periodLength: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodsToCompare" })
  periodsToCompare: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startMonth" })
  startMonth?: Date;
}

export class GetCompaniesCompanyIdDataFinancialsBalanceSheetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetCompaniesCompanyIdDataFinancialsBalanceSheetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdDataFinancialsBalanceSheetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCompaniesCompanyIdDataFinancialsBalanceSheetQueryParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdDataFinancialsBalanceSheetSecurity;
}

export class GetCompaniesCompanyIdDataFinancialsBalanceSheetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsDataBalanceSheetResponse?: shared.CodatPublicApiModelsDataBalanceSheetResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}