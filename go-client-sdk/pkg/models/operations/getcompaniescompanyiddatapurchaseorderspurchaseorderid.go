package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataPurchaseOrdersPurchaseOrderIDPathParams struct {
	CompanyID       string `pathParam:"style=simple,explode=false,name=companyId"`
	PurchaseOrderID string `pathParam:"style=simple,explode=false,name=purchaseOrderId"`
}

type GetCompaniesCompanyIDDataPurchaseOrdersPurchaseOrderIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataPurchaseOrdersPurchaseOrderIDRequest struct {
	PathParams GetCompaniesCompanyIDDataPurchaseOrdersPurchaseOrderIDPathParams
	Security   GetCompaniesCompanyIDDataPurchaseOrdersPurchaseOrderIDSecurity
}

type GetCompaniesCompanyIDDataPurchaseOrdersPurchaseOrderIDResponse struct {
	CodatDataContractsDatasetsPurchaseOrder *shared.CodatDataContractsDatasetsPurchaseOrder
	ContentType                             string
	StatusCode                              int64
}
