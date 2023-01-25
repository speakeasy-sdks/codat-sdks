package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersQueryParams struct {
	TimeoutInMinutes *int32 `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersRequest struct {
	PathParams  PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersPathParams
	QueryParams PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersQueryParams
	Request     *shared.CodatDataContractsDatasetsPurchaseOrder `request:"mediaType=application/json"`
	Security    PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersResponse struct {
	CodatDataContractsDatasetsPurchaseOrderPushOperation *shared.CodatDataContractsDatasetsPurchaseOrderPushOperation
	ContentType                                          string
	StatusCode                                           int64
}
