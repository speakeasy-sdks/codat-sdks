package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushPaymentsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushPaymentsQueryParams struct {
	TimeoutInMinutes *int `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushPaymentsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushPaymentsRequest struct {
	PathParams  PostCompaniesCompanyIDConnectionsConnectionIDPushPaymentsPathParams
	QueryParams PostCompaniesCompanyIDConnectionsConnectionIDPushPaymentsQueryParams
	Request     *shared.CodatDataContractsDatasetsPayment `request:"mediaType=application/json"`
	Security    PostCompaniesCompanyIDConnectionsConnectionIDPushPaymentsSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushPaymentsResponse struct {
	CodatDataContractsDatasetsPaymentPushOperation *shared.CodatDataContractsDatasetsPaymentPushOperation
	ContentType                                    string
	StatusCode                                     int
}
