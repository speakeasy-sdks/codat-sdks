package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesPathParams struct {
	AccountID    string `pathParam:"style=simple,explode=false,name=accountId"`
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesRequest struct {
	PathParams GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesPathParams
	Security   GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesSecurity
}

type GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesResponse struct {
	CodatAssessDataContractsAccountCategoriesAccountCategoriesModel *shared.CodatAssessDataContractsAccountCategoriesAccountCategoriesModel
	ContentType                                                     string
	StatusCode                                                      int64
}
