package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostCompaniesCompanyIDConnectionsConnectionIDPushSuppliersPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushSuppliersQueryParams struct {
	TimeoutInMinutes *int32 `queryParam:"style=form,explode=true,name=timeoutInMinutes"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushSuppliersRequest struct {
	PathParams  PostCompaniesCompanyIDConnectionsConnectionIDPushSuppliersPathParams
	QueryParams PostCompaniesCompanyIDConnectionsConnectionIDPushSuppliersQueryParams
	Request     *shared.CodatDataContractsDatasetsSupplier `request:"mediaType=application/json"`
	Security    PostCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSecurity
}

type PostCompaniesCompanyIDConnectionsConnectionIDPushSuppliersResponse struct {
	CodatDataContractsDatasetsSupplierPushOperation *shared.CodatDataContractsDatasetsSupplierPushOperation
	ContentType                                     string
	StatusCode                                      int64
}
