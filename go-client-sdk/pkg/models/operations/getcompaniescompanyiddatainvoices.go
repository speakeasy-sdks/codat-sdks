package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataInvoicesPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataInvoicesQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataInvoicesSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataInvoicesRequest struct {
	PathParams  GetCompaniesCompanyIDDataInvoicesPathParams
	QueryParams GetCompaniesCompanyIDDataInvoicesQueryParams
	Security    GetCompaniesCompanyIDDataInvoicesSecurity
}

type GetCompaniesCompanyIDDataInvoicesResponse struct {
	CodatDataContractsDatasetsInvoicePagedResponseModel *shared.CodatDataContractsDatasetsInvoicePagedResponseModel
	ContentType                                         string
	StatusCode                                          int64
}
