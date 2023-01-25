package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushItemsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushItemsQueryParams struct {
	TimeoutInMinutes *int32 `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushItemsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushItemsRequest struct {
	PathParams  PostCompaniesCompanyIDConnectionsConnectionIDPushItemsPathParams
	QueryParams PostCompaniesCompanyIDConnectionsConnectionIDPushItemsQueryParams
	Request     *shared.CodatDataContractsDatasetsItem `request:"mediaType=application/json"`
	Security    PostCompaniesCompanyIDConnectionsConnectionIDPushItemsSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushItemsResponse struct {
	CodatDataContractsDatasetsItemPushOperation *shared.CodatDataContractsDatasetsItemPushOperation
	ContentType                                 string
	StatusCode                                  int64
}
