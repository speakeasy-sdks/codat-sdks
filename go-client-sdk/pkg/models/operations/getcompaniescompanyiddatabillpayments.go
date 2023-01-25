package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataBillPaymentsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataBillPaymentsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataBillPaymentsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataBillPaymentsRequest struct {
	PathParams  GetCompaniesCompanyIDDataBillPaymentsPathParams
	QueryParams GetCompaniesCompanyIDDataBillPaymentsQueryParams
	Security    GetCompaniesCompanyIDDataBillPaymentsSecurity
}

type GetCompaniesCompanyIDDataBillPaymentsResponse struct {
	CodatDataContractsDatasetsBillPaymentPagedResponseModel *shared.CodatDataContractsDatasetsBillPaymentPagedResponseModel
	ContentType                                             string
	StatusCode                                              int64
}
