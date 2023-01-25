package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPutPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	DataType     string `pathParam:"style=simple,explode=false,name=dataType"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPutSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPutRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPutPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPutSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPutResponse struct {
	CodatDataContractsPushPushOption *shared.CodatDataContractsPushPushOption
	ContentType                      string
	StatusCode                       int64
}
