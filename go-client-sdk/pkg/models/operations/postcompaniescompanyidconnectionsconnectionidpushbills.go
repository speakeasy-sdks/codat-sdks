package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillsQueryParams struct {
	TimeoutInMinutes *int32 `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
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
	StatusCode                                  int64
}
