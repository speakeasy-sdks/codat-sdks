# Codat Python SDK

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install codatapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### AccountTransactions

* `get_companies_company_id_connections_connection_id_data_account_transactions` - Gets the account transactions for a given company.
* `get_companies_company_id_connections_connection_id_data_account_transactions_account_transaction_id_` - Gets the specified account transaction for a given company and connection.

### Accounts

* `get_companies_company_id_data_accounts` - Gets the latest chart of accounts for a company
* `get_companies_company_id_data_accounts_account_id_` - Gets a single account corresponding to the supplied Id
* `post_companies_company_id_connections_connection_id_push_accounts` - Posts an individual account for a given company.

### Assess

* `get_companies_company_id_reports_enhanced_balance_sheet_accounts` - Gets a list of accounts with account categories per statement period, specific to balance sheet
* `get_companies_company_id_reports_enhanced_cash_flow_transactions` - Gets a list of banking transactions and their categories.
* `get_companies_company_id_reports_enhanced_profit_and_loss_accounts` - Gets a list of accounts with account categories per statement period, specific to profit and loss
* `get_data_assess_accounts_categories` - Gets a list of all the Codat standard categories.
* `get_data_companies_company_id_assess_data_types_data_type_data_integrity_details` - Gets record-by-record match results for a given company and datatype, optionally restricted by a Codat query string.
* `get_data_companies_company_id_assess_data_types_data_type_data_integrity_status` - Gets match status for a given company and datatype.
* `get_data_companies_company_id_assess_data_types_data_type_data_integrity_summaries` - Gets match summary for a given company and datatype, optionally restricted by a Codat query string.
* `get_data_companies_company_id_assess_excel` - Returns the status of the latest report requested.
* `get_data_companies_company_id_assess_excel_download` - Download the Excel report to a local drive.
* `get_data_companies_company_id_connections_connection_id_assess_accounting_metrics_marketing` - Gets the marketing metrics from an accounting source for a given company, over one or more periods of time.
* `get_data_companies_company_id_connections_connection_id_assess_accounts_categories` - Get account categories (suggested and confirmed) for a company connection.
* `get_data_companies_company_id_connections_connection_id_assess_accounts_account_id_categories` - Gets the suggested and/or confirmed category for a specific account.
* `get_data_companies_company_id_connections_connection_id_assess_commerce_metrics_customer_retention` - Gets the customer retention metrics for a specific company connection, over one or more periods of time.
* `get_data_companies_company_id_connections_connection_id_assess_commerce_metrics_lifetime_value` - Gets the lifetime value metric for a specific company connection, over one or more periods of time.
* `get_data_companies_company_id_connections_connection_id_assess_commerce_metrics_orders` - Gets the order information for a specific company connection, over one or more periods of time.
* `get_data_companies_company_id_connections_connection_id_assess_commerce_metrics_refunds` - Gets the refunds information for a specific company connection, over one or more periods of time.
* `get_data_companies_company_id_connections_connection_id_assess_commerce_metrics_revenue` - Gets the revenue and revenue growth for a specific company connection, over one or more periods of time.
* `get_data_companies_company_id_connections_connection_id_assess_enhanced_balance_sheet` - Gets a fully categorized balance sheet statement for a given company, over one or more period(s).
* `get_data_companies_company_id_connections_connection_id_assess_enhanced_profit_and_loss` - Gets a fully categorized profit and loss statement for a given company, over one or more period(s).
* `get_data_companies_company_id_connections_connection_id_assess_financial_metrics` - Gets all the available financial metrics for a given company, over one or more periods.
* `get_data_companies_company_id_connections_connection_id_assess_subscriptions_mrr` - Gets key metrics for subscription revenue.
* `get_data_companies_company_id_connections_connection_id_assess_subscriptions_process` - Gets key metrics for subscription revenue.
* `patch_data_companies_company_id_connections_connection_id_assess_accounts_categories` - Updates the categories for all or a batch of accounts for a specific connection.
* `patch_data_companies_company_id_connections_connection_id_assess_accounts_account_id_categories` - Updates or removes the confirmed category of a specific account.
* `post_data_companies_company_id_assess_excel` - Request an Excel report for download.
* `post_data_companies_company_id_assess_excel_download` - Download the Excel report to a local drive.

### BankAccounts

* `get_companies_company_id_connections_connection_id_data_bank_accounts` - Gets the list of bank accounts for a given connection
* `get_companies_company_id_connections_connection_id_data_bank_accounts_account_id_` - Gets the bank account with a given ID
* `get_companies_company_id_connections_connection_id_data_bank_accounts_account_id_bank_transactions` - Gets bank transactions for a given bank account ID
* `get_companies_company_id_connections_connection_id_options_bank_accounts_account_id_bank_transactions` - Gets the options of pushing bank account transactions.
* `get_companies_company_id_data_bank_accounts_account_id_` - Gets the bank account for given account ID.
* `get_companies_company_id_data_bank_accounts_account_id_transactions` - Gets the latest bank transactions for given account ID and company.
* `post_companies_company_id_connections_connection_id_push_bank_accounts` - Posts a new bank account to the accounting package for a given company.
* `post_companies_company_id_connections_connection_id_push_bank_accounts_account_id_bank_transactions` - Posts bank transactions to the accounting package for a given company.
* `put_companies_company_id_connections_connection_id_push_bank_accounts_bank_account_id_` - Posts an updated bank account to the accounting package for a given company.

### BankingAccountBalances

* `get_companies_company_id_connections_connection_id_data_banking_account_balances` - Gets a list of balances for a bank account including end-of-day batch balance or running balances per transaction.

### BankingAccounts

* `get_companies_company_id_connections_connection_id_data_banking_accounts` - Gets a list of all bank accounts of the SMB, with rich data like balances, account numbers and institutions holding
the accounts.
* `get_companies_company_id_connections_connection_id_data_banking_accounts_account_id_` - Gets a specified bank account for a given company

### BankingTransactionCategories

* `get_companies_company_id_connections_connection_id_data_banking_transaction_categories` - Gets a list of hierarchical categories associated with a transaction for greater contextual meaning to transaction
activity.
* `get_companies_company_id_connections_connection_id_data_banking_transaction_categories_transaction_category_id_` - Gets a specified bank transaction category for a given company

### BankingTransactions

* `get_companies_company_id_connections_connection_id_data_banking_transactions` - Gets a list of transactions incurred by a bank account.
* `get_companies_company_id_connections_connection_id_data_banking_transactions_transaction_id_` - Gets a specified bank transaction for a given company
* `get_companies_company_id_data_banking_transactions` - Gets a list of transactions incurred by a company across all bank accounts.

### BillCreditNotes

* `get_companies_company_id_data_bill_credit_notes` - Gets a list of all bill credit notes for a company, with pagination
* `get_companies_company_id_data_bill_credit_notes_bill_credit_note_id_` - Gets a single billCreditNote corresponding to the supplied Id
* `post_companies_company_id_connections_connection_id_push_bill_credit_notes` - Posts a new billCreditNote to the accounting package for a given company.
* `put_companies_company_id_connections_connection_id_push_bill_credit_notes_bill_credit_note_id_` - Posts an updated billCreditNote to the accounting package for a given company.

### BillPayments

* `get_companies_company_id_data_bill_payments` - Gets the latest billPayments for a company, with pagination
* `get_companies_company_id_data_bill_payments_bill_payment_id_`
* `post_companies_company_id_connections_connection_id_push_bill_payments` - Posts a new bill payment to the accounting package for a given company.

### Bills

* `get_companies_company_id_connections_connection_id_data_bills_bill_id_attachments`
* `get_companies_company_id_connections_connection_id_data_bills_bill_id_attachments_attachment_id_`
* `get_companies_company_id_connections_connection_id_data_bills_bill_id_attachments_attachment_id_download`
* `get_companies_company_id_data_bills` - Gets the latest bills for a company, with pagination
* `get_companies_company_id_data_bills_bill_id_`
* `post_companies_company_id_connections_connection_id_push_bills` - Posts a new bill to the accounting package for a given company.
* `post_companies_company_id_connections_connection_id_push_bills_bill_id_attachments`
* `put_companies_company_id_connections_connection_id_push_bills_bill_id_` - Posts an updated bill to the accounting package for a given company.

### CommerceCustomers

* `get_companies_company_id_connections_connection_id_data_commerce_customers` - Gets the latest commerce customers for a company, with pagination
* `get_companies_company_id_connections_connection_id_data_commerce_customers_customer_id_` - Gets the specified commerce customer for a given company

### CommerceDisputes

* `get_companies_company_id_connections_connection_id_data_commerce_disputes` - Gets the latest commerce disputes for a company, with pagination
* `get_companies_company_id_connections_connection_id_data_commerce_disputes_dispute_id_` - Gets the specified commerce dispute for a given company

### CommerceInfo

* `get_companies_company_id_connections_connection_id_data_commerce_info` - Gets the latest basic info for a commerce company.

### CommerceLocations

* `get_companies_company_id_connections_connection_id_data_commerce_locations` - Gets the latest commerce locations for a company, with pagination
* `get_companies_company_id_connections_connection_id_data_commerce_locations_location_id_` - Gets the specified commerce location for a given company

### CommerceOrders

* `get_companies_company_id_connections_connection_id_data_commerce_orders` - Gets the latest commerce orders for a company, with pagination
* `get_companies_company_id_connections_connection_id_data_commerce_orders_order_id_` - Gets the specified commerce order for a given company

### CommercePaymentMethods

* `get_companies_company_id_connections_connection_id_data_commerce_payment_methods` - Gets a list of all payment methods from a data connection
* `get_companies_company_id_connections_connection_id_data_commerce_payment_methods_payment_method_id_` - Gets the details of an individual payment method.

### CommercePayments

* `get_companies_company_id_connections_connection_id_data_commerce_payments` - Gets the latest commerce payments for a company, with pagination
* `get_companies_company_id_connections_connection_id_data_commerce_payments_payment_id_` - Gets the specified commerce payment for a given company

### CommerceProductCategories

* `get_companies_company_id_connections_connection_id_data_commerce_product_categories` - Gets the latest commerce product categories for a company, with pagination
* `get_companies_company_id_connections_connection_id_data_commerce_product_categories_product_id_` - Gets the specified commerce product category for a given company

### CommerceProducts

* `get_companies_company_id_connections_connection_id_data_commerce_products` - Gets the latest commerce products for a company, with pagination
* `get_companies_company_id_connections_connection_id_data_commerce_products_product_id_` - Gets the specified commerce product for a given company

### CommerceTransactions

* `get_companies_company_id_connections_connection_id_data_commerce_transactions` - Gets the latest commerce transactions for a company, with pagination
* `get_companies_company_id_connections_connection_id_data_commerce_transactions_transaction_id_` - Gets the specified commerce transaction for a given company

### Companies

* `delete_companies_company_id_` - Deletes a company, this is not reversible.
* `get_companies` - Fetch a list of all companies metadata with accounting links on the Codat platform
* `get_companies_company_id_` - Fetch metadata on a single company.
* `get_companies_company_id_settings` - Fetch settings on a single company.
* `get_companies_company_id_sync_settings`
* `post_companies` - Initiate the process of onboarding a new company on the Codat platform
* `post_companies_company_id_sync_settings`
* `put_companies_company_id_` - Update a company with a new name and optional description
* `put_companies_company_id_settings` - Update settings on a single company.

### Connection

* `delete_companies_company_id_connections_connection_id_` - Disconnect and delete a data source from a company
* `get_companies_company_id_connections` - Retrieve all data sources connected to a single company, including their connection statuses
* `get_companies_company_id_connections_connection_id_` - Retrieve a single data source connected to a single company, including its connection status
* `get_companies_company_id_connections_connection_id_connection_info_bank_feed_accounts` - Get BankFeed BankAccounts for a single data source connected to a single company.
* `patch_companies_company_id_connections_connection_id_` - Disconnect a data source from a company
* `patch_companies_company_id_connections_connection_id_connection_info_bank_feed_accounts_bank_account_id_` - Update a single BankFeed BankAccount for a single data source connected to a single company.
* `post_companies_company_id_connections` - Connect a data source to a company
* `put_companies_company_id_connections_connection_id_authorization` - Put authorization information for a single data source connected to a single company.
* `put_companies_company_id_connections_connection_id_connection_info_bank_feed_accounts` - Put BankFeed BankAccounts for a single data source connected to a single company.

### CreditNotes

* `get_companies_company_id_data_credit_notes` - Gets a list of all credit notes for a company, with pagination
* `get_companies_company_id_data_credit_notes_credit_note_id_` - Gets a single creditNote corresponding to the supplied Id
* `post_companies_company_id_connections_connection_id_push_credit_notes`
* `put_companies_company_id_connections_connection_id_push_credit_notes_credit_note_id_` - Posts an updated credit note to the accounting package for a given company.

### Customers

* `get_companies_company_id_connections_connection_id_data_customers_customer_id_attachments`
* `get_companies_company_id_connections_connection_id_data_customers_customer_id_attachments_attachment_id_`
* `get_companies_company_id_connections_connection_id_data_customers_customer_id_attachments_attachment_id_download`
* `get_companies_company_id_data_customers` - Gets the latest customers for a company, with pagination
* `get_companies_company_id_data_customers_customer_id_` - Gets a single customer corresponding to the supplied Id
* `post_companies_company_id_connections_connection_id_push_customers` - Posts an individual customer for a given company.
* `put_companies_company_id_connections_connection_id_push_customers_customer_id_` - Posts an updated customer for a given company.

### Data

* `get_companies_company_id_data_history` - Fetch a list of all data snapshots captured for a company
* `get_companies_company_id_data_history_dataset_id_` - Fetch metadata on a single data synchronisation
* `post_companies_company_id_data_all` - Initiates the process of capturing a new data snapshot for a company
* `post_companies_company_id_data_queue_data_type_` - Initiates the process of capturing a data snapshot of a specified type for a company

### DataStatus

* `get_companies_company_id_data_status`

### DataTypes

* `get_companies_company_id_connections_connection_id_data_types_data_type_options` - Gets all available push options for the given data type
* `get_companies_company_id_connections_connection_id_data_types_data_type_options_post` - Gets the POST push options for the given data type
* `get_companies_company_id_connections_connection_id_data_types_data_type_options_put` - Gets the PUT push options for the given data type

### DatasetLogs

* `get_companies_company_id_data_dataset_logs_dataset_id_` - Gets dataset messages for a given dataset

### DirectCosts

* `get_companies_company_id_connections_connection_id_data_direct_costs` - Gets the direct costs for the company.
* `get_companies_company_id_connections_connection_id_data_direct_costs_direct_cost_id_` - Gets the specified direct cost for a given company.
* `get_companies_company_id_connections_connection_id_data_direct_costs_direct_cost_id_attachments` - Gets all attachments for the specified direct cost for a given company.
* `get_companies_company_id_connections_connection_id_data_direct_costs_direct_cost_id_attachments_attachment_id_` - Gets the specified direct cost attachment for a given company.
* `get_companies_company_id_connections_connection_id_data_direct_costs_direct_cost_id_attachments_attachment_id_download` - Downloads an attachment for the specified direct cost for a given company.
* `post_companies_company_id_connections_connection_id_push_direct_costs` - Posts a new direct cost to the accounting package for a given company.
* `post_companies_company_id_connections_connection_id_push_direct_costs_direct_cost_id_attachment` - Posts a new direct cost attachment for a given company.

### DirectIncomes

* `get_companies_company_id_connections_connection_id_data_direct_incomes` - Gets the direct incomes for a given company.
* `get_companies_company_id_connections_connection_id_data_direct_incomes_direct_income_id_` - Gets the specified direct income for a given company and connection.
* `get_companies_company_id_connections_connection_id_data_direct_incomes_direct_income_id_attachments` - Gets all attachments for the specified direct income for a given company.
* `get_companies_company_id_connections_connection_id_data_direct_incomes_direct_income_id_attachments_attachment_id_` - Gets the specified direct income attachment for a given company.
* `get_companies_company_id_connections_connection_id_data_direct_incomes_direct_income_id_attachments_attachment_id_download` - Downloads an attachment for the specified direct income for a given company.
* `post_companies_company_id_connections_connection_id_push_direct_incomes` - Posts a new direct income to the accounting package for a given company.
* `post_companies_company_id_connections_connection_id_push_direct_incomes_direct_income_id_attachment` - Posts a new direct income attachment for a given company.

### Files

* `get_companies_company_id_files` - View all files uploaded by a specified company
* `get_companies_company_id_files_download` - Download all files for a company. You can specify a date to download specific files for.
* `post_companies_company_id_connections_connection_id_files` - Upload files for a company

### Financials

* `get_companies_company_id_data_financials_balance_sheet` - Gets the latest balance sheet for a company.
* `get_companies_company_id_data_financials_cash_flow_statement` - Gets the latest cash flow statement for a company.
* `get_companies_company_id_data_financials_profit_and_loss` - Gets the latest profit and loss for a company.

### Info

* `get_companies_company_id_data_info` - Gets the latest basic info for a company.
* `post_companies_company_id_data_info` - Initiates the process of synchronising basic info for a company

### Integrations

* `delete_integrations_credentials_platform_key_` - Delete credentials used to authenticate with an accounting platform
* `get_integrations`
* `get_integrations_bank_settings`
* `get_integrations_credentials_platform_key_` - Fetch credentials required to authenticate with an accounting platform.
* `get_integrations_platform_key_`
* `get_integrations_platform_key_branding`
* `put_integrations_bank_settings`
* `put_integrations_credentials_platform_key_` - Update credentials required to authenticate with an accounting platform
* `put_integrations_platform_key_enabled`

### Invoices

* `get_companies_company_id_connections_connection_id_data_invoices_invoice_id_attachments`
* `get_companies_company_id_connections_connection_id_data_invoices_invoice_id_attachments_attachment_id_`
* `get_companies_company_id_connections_connection_id_data_invoices_invoice_id_attachments_attachment_id_download`
* `get_companies_company_id_data_invoices` - Gets the latest invoices for a company, with pagination
* `get_companies_company_id_data_invoices_invoice_id_`
* `get_companies_company_id_data_invoices_invoice_id_pdf`
* `post_companies_company_id_connections_connection_id_push_invoices` - Posts a new invoice to the accounting package for a given company.
* `post_companies_company_id_connections_connection_id_push_invoices_invoice_id_attachment`
* `put_companies_company_id_connections_connection_id_push_invoices_invoice_id_` - Posts an updated invoice to the accounting package for a given company.

### Items

* `get_companies_company_id_data_items` - Gets the items for a given company.
* `get_companies_company_id_data_items_item_id_` - Gets the specified item for a given company.
* `post_companies_company_id_connections_connection_id_push_items` - Posts a new item to the accounting package for a given company.

### JournalEntries

* `get_companies_company_id_data_journal_entries` - Gets the latest journal entries for a company, with pagination
* `get_companies_company_id_data_journal_entries_journal_entry_id_` - Gets a single JournalEntry corresponding to the supplied Id
* `post_companies_company_id_connections_connection_id_push_journal_entries` - Posts a new journalEntry to the accounting package for a given company.

### Journals

* `get_companies_company_id_data_journals` - Gets the latest journals for a company, with pagination
* `get_companies_company_id_data_journals_journal_id_` - Gets a single journal corresponding to the supplied Id
* `post_companies_company_id_connections_connection_id_push_journals` - Posts a new journal to the accounting package for a given company.

### Metrics

* `get_metrics_companies`

### PaymentMethods

* `get_companies_company_id_data_payment_methods` - Gets the payment methods for a given company.
* `get_companies_company_id_data_payment_methods_payment_method_id_` - Gets the specified payment method for a given company.

### Payments

* `get_companies_company_id_data_payments` - Gets the latest payments for a company, with pagination
* `get_companies_company_id_data_payments_payment_id_`
* `post_companies_company_id_connections_connection_id_push_payments` - Posts a new payment to the accounting package for a given company.

### Profile

* `get_profile` - Fetch your organisations company profile
* `get_profile_sync_settings`
* `post_profile_sync_settings`
* `put_profile` - Update your organisations company profile
* `put_profile_api_key` - Refresh the existing API key for your clients.
* `put_profile_sync_settings_data_type_`

### PurchaseOrders

* `get_companies_company_id_data_purchase_orders`
* `get_companies_company_id_data_purchase_orders_purchase_order_id_`
* `post_companies_company_id_connections_connection_id_push_purchase_orders` - Posts a new purchase order to the accounting package for a given company.
* `put_companies_company_id_connections_connection_id_push_purchase_orders_purchase_order_id_` - Posts an updated purchase order to the accounting package for a given company.

### Push

* `get_companies_company_id_connections_connection_id_options_data_type_` - Gets the push options for the given data type
* `get_companies_company_id_push` - Gets paged push operation records
* `get_companies_company_id_push_push_operation_key_` - Gets a single push operation record

### Reports

* `get_companies_company_id_reports_aged_creditor` - Gets the aged creditor report for a company.
* `get_companies_company_id_reports_aged_creditor_available`
* `get_companies_company_id_reports_aged_debtor` - Gets the aged debtor report for a company.
* `get_companies_company_id_reports_aged_debtor_available`
* `get_companies_company_id_reports_events`

### Rules

* `delete_rules_rule_id_`
* `get_rules` - Fetch a list of rules
* `get_rules_alerts`
* `get_rules_alerts_alert_id_`
* `get_rules_rule_id_`
* `get_rules_rule_id_alerts`
* `post_rules` - Subscribe to a rule
* `put_rules_rule_id_`

### SalesOrders

* `get_companies_company_id_data_sales_orders`
* `get_companies_company_id_data_sales_orders_sales_order_id_`

### Settings

* `get_settings` - Fetch your settings
* `get_settings_integrations_integration_id_` - Fetch your organisations integration settings
* `patch_settings` - Update your settings
* `patch_settings_integrations_integration_id_` - Update your organisations integration settings

### Suppliers

* `get_companies_company_id_connections_connection_id_data_suppliers_supplier_id_attachments`
* `get_companies_company_id_connections_connection_id_data_suppliers_supplier_id_attachments_attachment_id_`
* `get_companies_company_id_connections_connection_id_data_suppliers_supplier_id_attachments_attachment_id_download`
* `get_companies_company_id_data_suppliers` - Gets the latest suppliers for a company, with pagination
* `get_companies_company_id_data_suppliers_supplier_id_` - Gets a single supplier corresponding to the supplied Id
* `post_companies_company_id_connections_connection_id_push_suppliers`
* `put_companies_company_id_connections_connection_id_push_suppliers_supplier_id_`

### TaxRates

* `get_companies_company_id_data_tax_rates` - Gets the latest tax rates for a given company.
* `get_companies_company_id_data_tax_rates_tax_rate_id_` - Gets the specified tax rate for a given company.

### TrackingCategories

* `get_companies_company_id_data_tracking_categories` - Gets the latest tracking categories for a given company.
* `get_companies_company_id_data_tracking_categories_tracking_category_id_` - Gets the specified tracking categories for a given company.

### Transfers

* `get_companies_company_id_connections_connection_id_data_transfers` - Gets the transfers for a given company.
* `get_companies_company_id_connections_connection_id_data_transfers_transfer_id_` - Gets the specified transfer for a given company.
* `post_companies_company_id_connections_connection_id_push_transfers` - Posts a new transfer to the accounting package for a given company.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
