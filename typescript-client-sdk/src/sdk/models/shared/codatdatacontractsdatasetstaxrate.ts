import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";
import { CodatDataContractsDatasetsTaxRateComponent } from "./codatdatacontractsdatasetstaxratecomponent";
import { CodatDataContractsDatasetsTaxRateStatusEnum } from "./codatdatacontractsdatasetstaxratestatusenum";
import { CodatDataContractsDatasetsValidDatatypeLinks } from "./codatdatacontractsdatasetsvaliddatatypelinks";


export class CodatDataContractsDatasetsTaxRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=components", elemType: CodatDataContractsDatasetsTaxRateComponent })
  components?: CodatDataContractsDatasetsTaxRateComponent[];

  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CodatDataContractsDatasetsTaxRateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=totalTaxRate" })
  totalTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=validDatatypeLinks", elemType: CodatDataContractsDatasetsValidDatatypeLinks })
  validDatatypeLinks?: CodatDataContractsDatasetsValidDatatypeLinks[];
}