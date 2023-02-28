package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesQueryParams struct {
	TimeoutInMinutes *int `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesRequest struct {
	PathParams  PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesPathParams
	QueryParams PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesQueryParams
	Request     *shared.CodatDataContractsDatasetsDirectIncome `request:"mediaType=application/json"`
	Security    PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesResponse struct {
	CodatDataContractsDatasetsDirectIncomePushOperation *shared.CodatDataContractsDatasetsDirectIncomePushOperation
	ContentType                                         string
	StatusCode                                          int
}
