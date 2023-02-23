import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetCompaniesCompanyIdDataFinancialsProfitAndLossPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCompaniesCompanyIdDataFinancialsProfitAndLossQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLength" })
  periodLength: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodsToCompare" })
  periodsToCompare: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startMonth" })
  startMonth?: Date;
}

export class GetCompaniesCompanyIdDataFinancialsProfitAndLossSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetCompaniesCompanyIdDataFinancialsProfitAndLossRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdDataFinancialsProfitAndLossPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCompaniesCompanyIdDataFinancialsProfitAndLossQueryParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdDataFinancialsProfitAndLossSecurity;
}

export class GetCompaniesCompanyIdDataFinancialsProfitAndLossResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsDataProfitAndLossResponse?: shared.CodatPublicApiModelsDataProfitAndLossResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}