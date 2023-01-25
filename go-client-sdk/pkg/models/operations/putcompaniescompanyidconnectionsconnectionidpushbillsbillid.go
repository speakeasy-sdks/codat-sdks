package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PutCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDPathParams struct {
	BillID       string `pathParam:"style=simple,explode=false,name=billId"`
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDQueryParams struct {
	ForceUpdate      *bool  `queryParam:"style=form,explode=true,name=forceUpdate"`
	TimeoutInMinutes *int32 `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDRequest struct {
	PathParams  PutCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDPathParams
	QueryParams PutCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDQueryParams
	Request     *shared.CodatDataContractsDatasetsBill `request:"mediaType=application/json"`
	Security    PutCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDSecurity
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDResponse struct {
	CodatDataContractsDatasetsBillPushOperation *shared.CodatDataContractsDatasetsBillPushOperation
	ContentType                                 string
	StatusCode                                  int64
}
