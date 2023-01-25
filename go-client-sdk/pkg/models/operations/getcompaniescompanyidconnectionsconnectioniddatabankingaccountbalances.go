package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountBalancesPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountBalancesQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountBalancesSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountBalancesRequest struct {
	PathParams  GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountBalancesPathParams
	QueryParams GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountBalancesQueryParams
	Security    GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountBalancesSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountBalancesResponse struct {
	CodatDataContractsDatasetsBankingAccountBalancePagedResponseModel *shared.CodatDataContractsDatasetsBankingAccountBalancePagedResponseModel
	ContentType                                                       string
	StatusCode                                                        int64
}
