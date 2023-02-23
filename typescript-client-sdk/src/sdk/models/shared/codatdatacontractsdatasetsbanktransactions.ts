import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankStatementLine } from "./codatdatacontractsdatasetsbankstatementline";


export class CodatDataContractsDatasetsBankTransactions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=contractVersion" })
  contractVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: CodatDataContractsDatasetsBankStatementLine })
  transactions?: CodatDataContractsDatasetsBankStatementLine[];
}