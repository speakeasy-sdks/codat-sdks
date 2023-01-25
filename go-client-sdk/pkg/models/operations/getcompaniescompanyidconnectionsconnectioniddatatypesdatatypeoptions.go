package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	DataType     string `pathParam:"style=simple,explode=false,name=dataType"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsResponse struct {
	CodatPublicAPIModelsDataPushOptionsAggregate *shared.CodatPublicAPIModelsDataPushOptionsAggregate
	ContentType                                  string
	StatusCode                                   int64
}
