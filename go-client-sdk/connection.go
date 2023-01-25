package sdk

import (
	"context"
	"fmt"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/operations"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/utils"
	"net/http"
)

type Connection struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewConnection(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Connection {
	return &Connection{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteCompaniesCompanyIDConnectionsConnectionID - Disconnect and delete a data source from a company
// This revokes and removes a data connection from being listed as a company's connection(s).
func (s *Connection) DeleteCompaniesCompanyIDConnectionsConnectionID(ctx context.Context, request operations.DeleteCompaniesCompanyIDConnectionsConnectionIDRequest) (*operations.DeleteCompaniesCompanyIDConnectionsConnectionIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DeleteCompaniesCompanyIDConnectionsConnectionIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *bool
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeleteCompaniesCompanyIDConnectionsConnectionID200ApplicationJSONBoolean = out
		}
	}

	return res, nil
}

// GetCompaniesCompanyIDConnections - Retrieve all data sources connected to a single company, including their connection statuses
func (s *Connection) GetCompaniesCompanyIDConnections(ctx context.Context, request operations.GetCompaniesCompanyIDConnectionsRequest) (*operations.GetCompaniesCompanyIDConnectionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections", request.PathParams)

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

	res := &operations.GetCompaniesCompanyIDConnectionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatPublicAPIModelsCompanyDataConnectionPagedResponseModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatPublicAPIModelsCompanyDataConnectionPagedResponseModel = out
		}
	}

	return res, nil
}

// GetCompaniesCompanyIDConnectionsConnectionID - Retrieve a single data source connected to a single company, including its connection status
func (s *Connection) GetCompaniesCompanyIDConnectionsConnectionID(ctx context.Context, request operations.GetCompaniesCompanyIDConnectionsConnectionIDRequest) (*operations.GetCompaniesCompanyIDConnectionsConnectionIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}", request.PathParams)

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

	res := &operations.GetCompaniesCompanyIDConnectionsConnectionIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatPublicAPIModelsCompanyDataConnection
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatPublicAPIModelsCompanyDataConnection = out
		}
	}

	return res, nil
}

// GetCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccounts - Get BankFeed BankAccounts for a single data source connected to a single company.
func (s *Connection) GetCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccounts(ctx context.Context, request operations.GetCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsRequest) (*operations.GetCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts", request.PathParams)

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

	res := &operations.GetCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccounts = out
		}
	}

	return res, nil
}

// PatchCompaniesCompanyIDConnectionsConnectionID - Disconnect a data source from a company
// This revokes a company’s access to a data source, but the data connection is still listed as a part of a company's
// data connection(s). The status value in the request body should be "Unlinked" (case sensitive). Data connections
// can only be unlinked if in the Linked or Deauthorized state.
func (s *Connection) PatchCompaniesCompanyIDConnectionsConnectionID(ctx context.Context, request operations.PatchCompaniesCompanyIDConnectionsConnectionIDRequest) (*operations.PatchCompaniesCompanyIDConnectionsConnectionIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PatchCompaniesCompanyIDConnectionsConnectionIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatPublicAPIModelsCompanyDataConnection
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatPublicAPIModelsCompanyDataConnection = out
		}
	}

	return res, nil
}

// PatchCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsBankAccountID - Update a single BankFeed BankAccount for a single data source connected to a single company.
func (s *Connection) PatchCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsBankAccountID(ctx context.Context, request operations.PatchCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsBankAccountIDRequest) (*operations.PatchCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsBankAccountIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts/{bankAccountId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PatchCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsBankAccountIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount = out
		}
	}

	return res, nil
}

// PostCompaniesCompanyIDConnections - Connect a data source to a company
// Creates a data connection in PendingAuth status for the specified company and integration.
// In the request body, specify the four-digit platformKey of the integration to link the company to as a text string.
// Use GET /integrations to view all platformKeys.
// **Note: the required request body for this endpoint has been recently changed; see details [here](https://docs.codat.io/changelog/44714-deprecation-string-request-create-connections-endpoint).**
func (s *Connection) PostCompaniesCompanyIDConnections(ctx context.Context, request operations.PostCompaniesCompanyIDConnectionsRequest) (*operations.PostCompaniesCompanyIDConnectionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostCompaniesCompanyIDConnectionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatPublicAPIModelsCompanyDataConnection
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatPublicAPIModelsCompanyDataConnection = out
		}
	}

	return res, nil
}

// PutCompaniesCompanyIDConnectionsConnectionIDAuthorization - Put authorization information for a single data source connected to a single company.
func (s *Connection) PutCompaniesCompanyIDConnectionsConnectionIDAuthorization(ctx context.Context, request operations.PutCompaniesCompanyIDConnectionsConnectionIDAuthorizationRequest) (*operations.PutCompaniesCompanyIDConnectionsConnectionIDAuthorizationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/authorization", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutCompaniesCompanyIDConnectionsConnectionIDAuthorizationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatPublicAPIModelsCompanyDataConnection
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatPublicAPIModelsCompanyDataConnection = out
		}
	}

	return res, nil
}

// PutCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccounts - Put BankFeed BankAccounts for a single data source connected to a single company.
func (s *Connection) PutCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccounts(ctx context.Context, request operations.PutCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsRequest) (*operations.PutCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccounts = out
		}
	}

	return res, nil
}
