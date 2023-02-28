package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesPathParams struct {
	AccountID    string `pathParam:"style=simple,explode=false,name=accountId"`
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesRequest struct {
	PathParams PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesPathParams
	Request    *shared.CodatAssessDataContractsAccountCategoriesPatchSingleAccountCategoryModel `request:"mediaType=application/json"`
	Security   PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesSecurity
}

type PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategoriesResponse struct {
	CodatAssessDataContractsAccountCategoriesAccountCategoriesModel *shared.CodatAssessDataContractsAccountCategoriesAccountCategoriesModel
	ContentType                                                     string
	StatusCode                                                      int
}
