import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAgedCurrencyOutstanding } from "./codatdatacontractsdatasetsagedcurrencyoutstanding";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsAgedDebtorOutstanding extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsAgedCurrencyOutstanding })
  @Expose({ name: "agedCurrencyOutstanding" })
  @Type(() => CodatDataContractsDatasetsAgedCurrencyOutstanding)
  agedCurrencyOutstanding?: CodatDataContractsDatasetsAgedCurrencyOutstanding[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerId" })
  customerId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "customerName" })
  customerName?: string;
}