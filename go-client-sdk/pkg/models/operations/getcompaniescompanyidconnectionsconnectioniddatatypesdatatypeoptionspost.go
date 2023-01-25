package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPostPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	DataType     string `pathParam:"style=simple,explode=false,name=dataType"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPostSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPostRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPostPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPostSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPostResponse struct {
	CodatDataContractsPushPushOption *shared.CodatDataContractsPushPushOption
	ContentType                      string
	StatusCode                       int64
}
