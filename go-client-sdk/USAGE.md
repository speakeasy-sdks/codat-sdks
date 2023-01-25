<!-- Start SDK Example Usage -->
```go
package main

import (
    "github.com/speakeasy-sdks/codat-sdks/go-client-sdk"
    "github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
    "github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKeyAuth: shared.SchemeAPIKeyAuth{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsRequest{
        Security: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsSecurity{
            CodatLogin: &shared.SchemeCodatLogin{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsPathParams{
            CompanyID: "sit",
            ConnectionID: "voluptas",
        },
        QueryParams: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsQueryParams{
            OrderBy: "culpa",
            Page: 501233450539197794,
            PageSize: 3390393562759376202,
            Query: "dolor",
        },
    }
    
    res, err := s.AccountTransactions.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CodatDataContractsDatasetsAccountTransactionPagedResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->