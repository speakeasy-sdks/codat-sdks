import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankStatementLine } from "./codatdatacontractsdatasetsbankstatementline";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsBankTransactions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "contractVersion" })
  contractVersion?: string;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsBankStatementLine })
  @Expose({ name: "transactions" })
  @Type(() => CodatDataContractsDatasetsBankStatementLine)
  transactions?: CodatDataContractsDatasetsBankStatementLine[];
}