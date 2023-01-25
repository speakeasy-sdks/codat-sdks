package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushAccountsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushAccountsQueryParams struct {
	TimeoutInMinutes *int32 `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushAccountsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushAccountsRequest struct {
	PathParams  PostCompaniesCompanyIDConnectionsConnectionIDPushAccountsPathParams
	QueryParams PostCompaniesCompanyIDConnectionsConnectionIDPushAccountsQueryParams
	Request     *shared.CodatDataContractsDatasetsAccount `request:"mediaType=application/json"`
	Security    PostCompaniesCompanyIDConnectionsConnectionIDPushAccountsSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushAccountsResponse struct {
	CodatDataContractsDatasetsAccountPushOperation *shared.CodatDataContractsDatasetsAccountPushOperation
	ContentType                                    string
	StatusCode                                     int64
}
