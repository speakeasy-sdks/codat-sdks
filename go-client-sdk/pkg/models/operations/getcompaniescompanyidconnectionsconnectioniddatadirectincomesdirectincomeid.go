package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDPathParams struct {
	CompanyID      string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID   string `pathParam:"style=simple,explode=false,name=connectionId"`
	DirectIncomeID string `pathParam:"style=simple,explode=false,name=directIncomeId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDResponse struct {
	CodatDataContractsDatasetsDirectIncome *shared.CodatDataContractsDatasetsDirectIncome
	ContentType                            string
	StatusCode                             int64
}
