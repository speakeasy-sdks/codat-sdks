<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key_auth=shared.SchemeAPIKeyAuth(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsRequest(
    security=operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsSecurity(
        codat_login=shared.SchemeCodatLogin(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsPathParams(
        company_id="sit",
        connection_id="voluptas",
    ),
    query_params=operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsQueryParams(
        order_by="culpa",
        page=501233450539197794,
        page_size=3390393562759376202,
        query="dolor",
    ),
)
    
res = s.account_transactions.get_companies_company_id_connections_connection_id_data_account_transactions(req)

if res.codat_data_contracts_datasets_account_transaction_paged_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->