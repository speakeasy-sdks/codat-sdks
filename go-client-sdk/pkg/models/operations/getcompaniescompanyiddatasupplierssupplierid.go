package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataSuppliersSupplierIDPathParams struct {
	CompanyID  string `pathParam:"style=simple,explode=false,name=companyId"`
	SupplierID string `pathParam:"style=simple,explode=false,name=supplierId"`
}

type GetCompaniesCompanyIDDataSuppliersSupplierIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataSuppliersSupplierIDRequest struct {
	PathParams GetCompaniesCompanyIDDataSuppliersSupplierIDPathParams
	Security   GetCompaniesCompanyIDDataSuppliersSupplierIDSecurity
}

type GetCompaniesCompanyIDDataSuppliersSupplierIDResponse struct {
	CodatDataContractsDatasetsSupplier *shared.CodatDataContractsDatasetsSupplier
	ContentType                        string
	StatusCode                         int64
}
