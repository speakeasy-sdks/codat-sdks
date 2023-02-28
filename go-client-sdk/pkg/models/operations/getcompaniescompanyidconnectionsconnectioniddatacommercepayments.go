package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentsRequest struct {
	PathParams  GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentsPathParams
	QueryParams GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentsQueryParams
	Security    GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentsSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentsResponse struct {
	CodatDataContractsDatasetsCommercePaymentPagedResponseModel *shared.CodatDataContractsDatasetsCommercePaymentPagedResponseModel
	ContentType                                                 string
	StatusCode                                                  int
}
