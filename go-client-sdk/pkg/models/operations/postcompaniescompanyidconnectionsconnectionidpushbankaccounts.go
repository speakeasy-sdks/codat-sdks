package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsQueryParams struct {
	AllowSyncOnPushComplete *bool `queryParam:"style=form,explode=true,name=allowSyncOnPushComplete"`
	TimeoutInMinutes        *int  `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsRequest struct {
	PathParams  PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsPathParams
	QueryParams PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsQueryParams
	Request     *shared.CodatDataContractsDatasetsBankAccount `request:"mediaType=application/json"`
	Security    PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsResponse struct {
	CodatDataContractsDatasetsBankAccountPushOperation *shared.CodatDataContractsDatasetsBankAccountPushOperation
	ContentType                                        string
	StatusCode                                         int
}
