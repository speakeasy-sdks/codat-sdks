import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsAgedCurrencyOutstanding } from "./codatdatacontractsdatasetsagedcurrencyoutstanding";



export class CodatDataContractsDatasetsAgedCreditorOutstanding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agedCurrencyOutstanding", elemType: CodatDataContractsDatasetsAgedCurrencyOutstanding })
  agedCurrencyOutstanding?: CodatDataContractsDatasetsAgedCurrencyOutstanding[];

  @SpeakeasyMetadata({ data: "json, name=supplierId" })
  supplierId?: string;

  @SpeakeasyMetadata({ data: "json, name=supplierName" })
  supplierName?: string;
}
