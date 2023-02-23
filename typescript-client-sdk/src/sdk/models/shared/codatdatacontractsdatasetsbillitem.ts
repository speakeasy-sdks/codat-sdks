import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAccountRef } from "./codatdatacontractsdatasetsaccountref";
import { CodatDataContractsDatasetsTaxRateRef } from "./codatdatacontractsdatasetstaxrateref";


export class CodatDataContractsDatasetsBillItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: CodatDataContractsDatasetsAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: CodatDataContractsDatasetsTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=unitPrice" })
  unitPrice?: number;
}