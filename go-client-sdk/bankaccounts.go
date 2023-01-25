package sdk

import (
	"context"
	"fmt"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/operations"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/utils"
	"net/http"
)

type BankAccounts struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewBankAccounts(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *BankAccounts {
	return &BankAccounts{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccounts - Gets the list of bank accounts for a given connection
func (s *BankAccounts) GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccounts(ctx context.Context, request operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsRequest) (*operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/data/bankAccounts", request.PathParams)

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

	res := &operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsBankAccountPagedResponseModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsBankAccountPagedResponseModel = out
		}
	}

	return res, nil
}

// GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountID - Gets the bank account with a given ID
func (s *BankAccounts) GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountID(ctx context.Context, request operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDRequest) (*operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/data/bankAccounts/{accountId}", request.PathParams)

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

	res := &operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsBankAccount
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsBankAccount = out
		}
	}

	return res, nil
}

// GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDBankTransactions - Gets bank transactions for a given bank account ID
func (s *BankAccounts) GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDBankTransactions(ctx context.Context, request operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDBankTransactionsRequest) (*operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDBankTransactionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/data/bankAccounts/{accountId}/bankTransactions", request.PathParams)

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

	res := &operations.GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDBankTransactionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsBankTransactionPagedResponseModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsBankTransactionPagedResponseModel = out
		}
	}

	return res, nil
}

// GetCompaniesCompanyIDConnectionsConnectionIDOptionsBankAccountsAccountIDBankTransactions - Gets the options of pushing bank account transactions.
func (s *BankAccounts) GetCompaniesCompanyIDConnectionsConnectionIDOptionsBankAccountsAccountIDBankTransactions(ctx context.Context, request operations.GetCompaniesCompanyIDConnectionsConnectionIDOptionsBankAccountsAccountIDBankTransactionsRequest) (*operations.GetCompaniesCompanyIDConnectionsConnectionIDOptionsBankAccountsAccountIDBankTransactionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/options/bankAccounts/{accountId}/bankTransactions", request.PathParams)

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

	res := &operations.GetCompaniesCompanyIDConnectionsConnectionIDOptionsBankAccountsAccountIDBankTransactionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsPushPushOption
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsPushPushOption = out
		}
	}

	return res, nil
}

// GetCompaniesCompanyIDDataBankAccountsAccountID - Gets the bank account for given account ID.
func (s *BankAccounts) GetCompaniesCompanyIDDataBankAccountsAccountID(ctx context.Context, request operations.GetCompaniesCompanyIDDataBankAccountsAccountIDRequest) (*operations.GetCompaniesCompanyIDDataBankAccountsAccountIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/data/bankAccounts/{accountId}", request.PathParams)

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

	res := &operations.GetCompaniesCompanyIDDataBankAccountsAccountIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsBankStatementAccount
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsBankStatementAccount = out
		}
	}

	return res, nil
}

// GetCompaniesCompanyIDDataBankAccountsAccountIDTransactions - Gets the latest bank transactions for given account ID and company.
func (s *BankAccounts) GetCompaniesCompanyIDDataBankAccountsAccountIDTransactions(ctx context.Context, request operations.GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsRequest) (*operations.GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/data/bankAccounts/{accountId}/transactions", request.PathParams)

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

	res := &operations.GetCompaniesCompanyIDDataBankAccountsAccountIDTransactionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsBankStatementLinePagedResponseModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsBankStatementLinePagedResponseModel = out
		}
	}

	return res, nil
}

// PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccounts - Posts a new bank account to the accounting package for a given company.
func (s *BankAccounts) PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccounts(ctx context.Context, request operations.PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsRequest) (*operations.PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/push/bankAccounts", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsBankAccountPushOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsBankAccountPushOperation = out
		}
	}

	return res, nil
}

// PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactions - Posts bank transactions to the accounting package for a given company.
func (s *BankAccounts) PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactions(ctx context.Context, request operations.PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsRequest) (*operations.PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}/bankTransactions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsBankTransactionsPushOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsBankTransactionsPushOperation = out
		}
	}

	return res, nil
}

// PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountID - Posts an updated bank account to the accounting package for a given company.
func (s *BankAccounts) PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountID(ctx context.Context, request operations.PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDRequest) (*operations.PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/push/bankAccounts/{bankAccountId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsBankAccountPushOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsBankAccountPushOperation = out
		}
	}

	return res, nil
}
