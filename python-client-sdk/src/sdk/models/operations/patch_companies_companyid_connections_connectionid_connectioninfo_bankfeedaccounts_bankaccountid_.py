from __future__ import annotations
import dataclasses
from ..shared import codat_standardization_bankfeedsaccounts_contract_bankfeedbankaccount as shared_codat_standardization_bankfeedsaccounts_contract_bankfeedbankaccount
from ..shared import security as shared_security
from typing import Optional


@dataclasses.dataclass
class PatchCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsBankAccountIDPathParams:
    bank_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'bankAccountId', 'style': 'simple', 'explode': False }})
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    connection_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsBankAccountIDSecurity:
    api_key_auth: Optional[shared_security.SchemeAPIKeyAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    codat_login: Optional[shared_security.SchemeCodatLogin] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatchCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsBankAccountIDRequest:
    path_params: PatchCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsBankAccountIDPathParams = dataclasses.field()
    security: PatchCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsBankAccountIDSecurity = dataclasses.field()
    request: Optional[shared_codat_standardization_bankfeedsaccounts_contract_bankfeedbankaccount.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsBankAccountIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    codat_standardization_bank_feeds_accounts_contract_bank_feed_bank_account: Optional[shared_codat_standardization_bankfeedsaccounts_contract_bankfeedbankaccount.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount] = dataclasses.field(default=None)
    