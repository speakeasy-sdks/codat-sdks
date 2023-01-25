package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataTaxRatesTaxRateIDPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
	TaxRateID string `pathParam:"style=simple,explode=false,name=taxRateId"`
}

type GetCompaniesCompanyIDDataTaxRatesTaxRateIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataTaxRatesTaxRateIDRequest struct {
	PathParams GetCompaniesCompanyIDDataTaxRatesTaxRateIDPathParams
	Security   GetCompaniesCompanyIDDataTaxRatesTaxRateIDSecurity
}

type GetCompaniesCompanyIDDataTaxRatesTaxRateIDResponse struct {
	CodatDataContractsDatasetsTaxRate *shared.CodatDataContractsDatasetsTaxRate
	ContentType                       string
	StatusCode                        int64
}
