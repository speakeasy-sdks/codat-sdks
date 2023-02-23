package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillsQueryParams struct {
	TimeoutInMinutes *int `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillsRequest struct {
	PathParams  PostCompaniesCompanyIDConnectionsConnectionIDPushBillsPathParams
	QueryParams PostCompaniesCompanyIDConnectionsConnectionIDPushBillsQueryParams
	Request     *shared.CodatDataContractsDatasetsBill `request:"mediaType=application/json"`
	Security    PostCompaniesCompanyIDConnectionsConnectionIDPushBillsSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillsResponse struct {
	CodatDataContractsDatasetsBillPushOperation *shared.CodatDataContractsDatasetsBillPushOperation
	ContentType                                 string
	StatusCode                                  int
}
