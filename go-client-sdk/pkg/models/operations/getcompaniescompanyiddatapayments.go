package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataPaymentsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataPaymentsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataPaymentsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataPaymentsRequest struct {
	PathParams  GetCompaniesCompanyIDDataPaymentsPathParams
	QueryParams GetCompaniesCompanyIDDataPaymentsQueryParams
	Security    GetCompaniesCompanyIDDataPaymentsSecurity
}

type GetCompaniesCompanyIDDataPaymentsResponse struct {
	CodatDataContractsDatasetsPaymentPagedResponseModel *shared.CodatDataContractsDatasetsPaymentPagedResponseModel
	ContentType                                         string
	StatusCode                                          int
}
