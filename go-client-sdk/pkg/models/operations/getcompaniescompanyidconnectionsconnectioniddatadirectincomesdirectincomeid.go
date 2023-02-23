package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDPathParams struct {
	CompanyID      string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID   string `pathParam:"style=simple,explode=false,name=connectionId"`
	DirectIncomeID string `pathParam:"style=simple,explode=false,name=directIncomeId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDResponse struct {
	CodatDataContractsDatasetsDirectIncome *shared.CodatDataContractsDatasetsDirectIncome
	ContentType                            string
	StatusCode                             int
}
