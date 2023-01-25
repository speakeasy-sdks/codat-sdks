package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	InvoiceID    string `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDQueryParams struct {
	ForceUpdate      *bool  `queryParam:"style=form,explode=true,name=forceUpdate"`
	TimeoutInMinutes *int32 `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDRequest struct {
	PathParams  PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDPathParams
	QueryParams PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDQueryParams
	Request     *shared.CodatDataContractsDatasetsInvoice `request:"mediaType=application/json"`
	Security    PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDSecurity
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDResponse struct {
	CodatDataContractsDatasetsInvoicePushOperation *shared.CodatDataContractsDatasetsInvoicePushOperation
	ContentType                                    string
	StatusCode                                     int64
}
