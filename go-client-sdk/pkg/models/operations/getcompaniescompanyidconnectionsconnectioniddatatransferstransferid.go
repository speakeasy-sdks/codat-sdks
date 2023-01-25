package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataTransfersTransferIDPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	TransferID   string `pathParam:"style=simple,explode=false,name=transferId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataTransfersTransferIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataTransfersTransferIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataTransfersTransferIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataTransfersTransferIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataTransfersTransferIDResponse struct {
	CodatDataContractsDatasetsTransfer *shared.CodatDataContractsDatasetsTransfer
	ContentType                        string
	StatusCode                         int64
}
