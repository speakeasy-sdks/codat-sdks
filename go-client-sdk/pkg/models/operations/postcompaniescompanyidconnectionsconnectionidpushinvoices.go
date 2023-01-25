package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesQueryParams struct {
	TimeoutInMinutes *int32 `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesRequest struct {
	PathParams  PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesPathParams
	QueryParams PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesQueryParams
	Request     *shared.CodatDataContractsDatasetsInvoice `request:"mediaType=application/json"`
	Security    PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesResponse struct {
	CodatDataContractsDatasetsInvoicePushOperation *shared.CodatDataContractsDatasetsInvoicePushOperation
	ContentType                                    string
	StatusCode                                     int64
}
