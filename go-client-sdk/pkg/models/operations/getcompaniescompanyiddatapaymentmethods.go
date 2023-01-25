package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataPaymentMethodsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataPaymentMethodsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataPaymentMethodsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataPaymentMethodsRequest struct {
	PathParams  GetCompaniesCompanyIDDataPaymentMethodsPathParams
	QueryParams GetCompaniesCompanyIDDataPaymentMethodsQueryParams
	Security    GetCompaniesCompanyIDDataPaymentMethodsSecurity
}

type GetCompaniesCompanyIDDataPaymentMethodsResponse struct {
	CodatDataContractsDatasetsPaymentMethodPagedResponseModel *shared.CodatDataContractsDatasetsPaymentMethodPagedResponseModel
	ContentType                                               string
	StatusCode                                                int64
}
