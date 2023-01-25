package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataSalesOrdersSalesOrderIDPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	SalesOrderID string `pathParam:"style=simple,explode=false,name=salesOrderId"`
}

type GetCompaniesCompanyIDDataSalesOrdersSalesOrderIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataSalesOrdersSalesOrderIDRequest struct {
	PathParams GetCompaniesCompanyIDDataSalesOrdersSalesOrderIDPathParams
	Security   GetCompaniesCompanyIDDataSalesOrdersSalesOrderIDSecurity
}

type GetCompaniesCompanyIDDataSalesOrdersSalesOrderIDResponse struct {
	CodatDataContractsDatasetsSalesOrder *shared.CodatDataContractsDatasetsSalesOrder
	ContentType                          string
	StatusCode                           int64
}
