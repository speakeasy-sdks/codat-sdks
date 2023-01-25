package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataItemsItemIDPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
	ItemID    string `pathParam:"style=simple,explode=false,name=itemId"`
}

type GetCompaniesCompanyIDDataItemsItemIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataItemsItemIDRequest struct {
	PathParams GetCompaniesCompanyIDDataItemsItemIDPathParams
	Security   GetCompaniesCompanyIDDataItemsItemIDSecurity
}

type GetCompaniesCompanyIDDataItemsItemIDResponse struct {
	CodatDataContractsDatasetsItem *shared.CodatDataContractsDatasetsItem
	ContentType                    string
	StatusCode                     int64
}
