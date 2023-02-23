import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAgedCurrencyOutstanding } from "./codatdatacontractsdatasetsagedcurrencyoutstanding";


export class CodatDataContractsDatasetsAgedDebtorOutstanding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agedCurrencyOutstanding", elemType: CodatDataContractsDatasetsAgedCurrencyOutstanding })
  agedCurrencyOutstanding?: CodatDataContractsDatasetsAgedCurrencyOutstanding[];

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=customerName" })
  customerName?: string;
}