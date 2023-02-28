import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAgedCurrencyOutstanding } from "./codatdatacontractsdatasetsagedcurrencyoutstanding";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsAgedCreditorOutstanding extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsAgedCurrencyOutstanding })
  @Expose({ name: "agedCurrencyOutstanding" })
  @Type(() => CodatDataContractsDatasetsAgedCurrencyOutstanding)
  agedCurrencyOutstanding?: CodatDataContractsDatasetsAgedCurrencyOutstanding[];

  @SpeakeasyMetadata()
  @Expose({ name: "supplierId" })
  supplierId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;
}