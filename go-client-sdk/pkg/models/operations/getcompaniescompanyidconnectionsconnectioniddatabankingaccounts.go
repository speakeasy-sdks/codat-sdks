package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsRequest struct {
	PathParams  GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsPathParams
	QueryParams GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsQueryParams
	Security    GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsResponse struct {
	CodatDataContractsDatasetsBankingAccountPagedResponseModel *shared.CodatDataContractsDatasetsBankingAccountPagedResponseModel
	ContentType                                                string
	StatusCode                                                 int
}
