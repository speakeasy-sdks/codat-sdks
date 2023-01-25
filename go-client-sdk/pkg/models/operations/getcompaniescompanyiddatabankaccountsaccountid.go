package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataBankAccountsAccountIDPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataBankAccountsAccountIDQueryParams struct {
	Query *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataBankAccountsAccountIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataBankAccountsAccountIDRequest struct {
	PathParams  GetCompaniesCompanyIDDataBankAccountsAccountIDPathParams
	QueryParams GetCompaniesCompanyIDDataBankAccountsAccountIDQueryParams
	Security    GetCompaniesCompanyIDDataBankAccountsAccountIDSecurity
}

type GetCompaniesCompanyIDDataBankAccountsAccountIDResponse struct {
	CodatDataContractsDatasetsBankStatementAccount *shared.CodatDataContractsDatasetsBankStatementAccount
	ContentType                                    string
	StatusCode                                     int64
}
