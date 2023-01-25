package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsRequest struct {
	PathParams  GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsPathParams
	QueryParams GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsQueryParams
	Security    GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsResponse struct {
	CodatDataContractsDatasetsBankingAccountPagedResponseModel *shared.CodatDataContractsDatasetsBankingAccountPagedResponseModel
	ContentType                                                string
	StatusCode                                                 int64
}
