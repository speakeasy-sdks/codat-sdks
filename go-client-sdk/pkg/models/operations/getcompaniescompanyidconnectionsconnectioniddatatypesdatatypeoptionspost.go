package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPOSTPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	DataType     string `pathParam:"style=simple,explode=false,name=dataType"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPOSTSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPOSTRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPOSTPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPOSTSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPOSTResponse struct {
	CodatDataContractsPushPushOption *shared.CodatDataContractsPushPushOption
	ContentType                      string
	StatusCode                       int
}
