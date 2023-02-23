package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PutCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSupplierIDPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	SupplierID   string `pathParam:"style=simple,explode=false,name=supplierId"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSupplierIDQueryParams struct {
	ForceUpdate      *bool `queryParam:"style=form,explode=true,name=forceUpdate"`
	TimeoutInMinutes *int  `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSupplierIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSupplierIDRequest struct {
	PathParams  PutCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSupplierIDPathParams
	QueryParams PutCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSupplierIDQueryParams
	Request     *shared.CodatDataContractsDatasetsSupplier `request:"mediaType=application/json"`
	Security    PutCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSupplierIDSecurity
}

type PutCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSupplierIDResponse struct {
	CodatDataContractsDatasetsSupplierPushOperation *shared.CodatDataContractsDatasetsSupplierPushOperation
	ContentType                                     string
	StatusCode                                      int
}
