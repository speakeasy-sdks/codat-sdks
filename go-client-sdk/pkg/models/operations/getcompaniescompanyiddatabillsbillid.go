package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataBillsBillIDPathParams struct {
	BillID    string `pathParam:"style=simple,explode=false,name=billId"`
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataBillsBillIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataBillsBillIDRequest struct {
	PathParams GetCompaniesCompanyIDDataBillsBillIDPathParams
	Security   GetCompaniesCompanyIDDataBillsBillIDSecurity
}

type GetCompaniesCompanyIDDataBillsBillIDResponse struct {
	CodatDataContractsDatasetsBill *shared.CodatDataContractsDatasetsBill
	ContentType                    string
	StatusCode                     int64
}
