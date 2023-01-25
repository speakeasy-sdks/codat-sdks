package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataPaymentsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataPaymentsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataPaymentsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataPaymentsRequest struct {
	PathParams  GetCompaniesCompanyIDDataPaymentsPathParams
	QueryParams GetCompaniesCompanyIDDataPaymentsQueryParams
	Security    GetCompaniesCompanyIDDataPaymentsSecurity
}

type GetCompaniesCompanyIDDataPaymentsResponse struct {
	CodatDataContractsDatasetsPaymentPagedResponseModel *shared.CodatDataContractsDatasetsPaymentPagedResponseModel
	ContentType                                         string
	StatusCode                                          int64
}
