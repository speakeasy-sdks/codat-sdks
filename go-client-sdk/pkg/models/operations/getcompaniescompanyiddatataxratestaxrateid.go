package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataTaxRatesTaxRateIDPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
	TaxRateID string `pathParam:"style=simple,explode=false,name=taxRateId"`
}

type GetCompaniesCompanyIDDataTaxRatesTaxRateIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataTaxRatesTaxRateIDRequest struct {
	PathParams GetCompaniesCompanyIDDataTaxRatesTaxRateIDPathParams
	Security   GetCompaniesCompanyIDDataTaxRatesTaxRateIDSecurity
}

type GetCompaniesCompanyIDDataTaxRatesTaxRateIDResponse struct {
	CodatDataContractsDatasetsTaxRate *shared.CodatDataContractsDatasetsTaxRate
	ContentType                       string
	StatusCode                        int
}
