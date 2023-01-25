package sdk

import (
	"context"
	"fmt"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/operations"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/utils"
	"net/http"
)

type BankingAccounts struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewBankingAccounts(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *BankingAccounts {
	return &BankingAccounts{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccounts - Gets a list of all bank accounts of the SMB, with rich data like balances, account numbers and institutions holding
// the accounts.
func (s *BankingAccounts) GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccounts(ctx context.Context, request operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsRequest) (*operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/data/banking-accounts", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsBankingAccountPagedResponseModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsBankingAccountPagedResponseModel = out
		}
	}

	return res, nil
}

// GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsAccountID - Gets a specified bank account for a given company
func (s *BankingAccounts) GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsAccountID(ctx context.Context, request operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsAccountIDRequest) (*operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsAccountIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/data/banking-accounts/{accountId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsAccountIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsBankingAccount
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsBankingAccount = out
		}
	}

	return res, nil
}
