package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PutCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersPurchaseOrderIDPathParams struct {
	CompanyID       string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID    string `pathParam:"style=simple,explode=false,name=connectionId"`
	PurchaseOrderID string `pathParam:"style=simple,explode=false,name=purchaseOrderId"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersPurchaseOrderIDQueryParams struct {
	ForceUpdate      *bool `queryParam:"style=form,explode=true,name=forceUpdate"`
	TimeoutInMinutes *int  `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersPurchaseOrderIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersPurchaseOrderIDRequest struct {
	PathParams  PutCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersPurchaseOrderIDPathParams
	QueryParams PutCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersPurchaseOrderIDQueryParams
	Request     *shared.CodatDataContractsDatasetsPurchaseOrder `request:"mediaType=application/json"`
	Security    PutCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersPurchaseOrderIDSecurity
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersPurchaseOrderIDResponse struct {
	CodatDataContractsDatasetsPurchaseOrderPushOperation *shared.CodatDataContractsDatasetsPurchaseOrderPushOperation
	ContentType                                          string
	StatusCode                                           int
}
