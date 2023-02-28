package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPUTPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	DataType     string `pathParam:"style=simple,explode=false,name=dataType"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPUTSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPUTRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPUTPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPUTSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPUTResponse struct {
	CodatDataContractsPushPushOption *shared.CodatDataContractsPushPushOption
	ContentType                      string
	StatusCode                       int
}
