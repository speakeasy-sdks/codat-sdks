package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataTaxRatesPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataTaxRatesQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataTaxRatesSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataTaxRatesRequest struct {
	PathParams  GetCompaniesCompanyIDDataTaxRatesPathParams
	QueryParams GetCompaniesCompanyIDDataTaxRatesQueryParams
	Security    GetCompaniesCompanyIDDataTaxRatesSecurity
}

type GetCompaniesCompanyIDDataTaxRatesResponse struct {
	CodatDataContractsDatasetsTaxRatePagedResponseModel *shared.CodatDataContractsDatasetsTaxRatePagedResponseModel
	ContentType                                         string
	StatusCode                                          int64
}
