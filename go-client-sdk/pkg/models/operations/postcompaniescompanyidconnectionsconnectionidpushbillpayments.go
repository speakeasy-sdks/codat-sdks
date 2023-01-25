package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillPaymentsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillPaymentsQueryParams struct {
	TimeoutInMinutes *int32 `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillPaymentsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillPaymentsRequest struct {
	PathParams  PostCompaniesCompanyIDConnectionsConnectionIDPushBillPaymentsPathParams
	QueryParams PostCompaniesCompanyIDConnectionsConnectionIDPushBillPaymentsQueryParams
	Request     *shared.CodatDataContractsDatasetsBillPayment `request:"mediaType=application/json"`
	Security    PostCompaniesCompanyIDConnectionsConnectionIDPushBillPaymentsSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushBillPaymentsResponse struct {
	CodatDataContractsDatasetsBillPaymentPushOperation *shared.CodatDataContractsDatasetsBillPaymentPushOperation
	ContentType                                        string
	StatusCode                                         int64
}
