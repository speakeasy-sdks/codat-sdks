import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";
import { CodatDataContractsDatasetsTaxRateComponent } from "./codatdatacontractsdatasetstaxratecomponent";
import { CodatDataContractsDatasetsTaxRateStatusEnum } from "./codatdatacontractsdatasetstaxratestatusenum";
import { CodatDataContractsDatasetsValidDatatypeLinks } from "./codatdatacontractsdatasetsvaliddatatypelinks";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsTaxRate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: string;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsTaxRateComponent })
  @Expose({ name: "components" })
  @Type(() => CodatDataContractsDatasetsTaxRateComponent)
  components?: CodatDataContractsDatasetsTaxRateComponent[];

  @SpeakeasyMetadata()
  @Expose({ name: "effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CodatDataContractsDatasetsMetadata)
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: CodatDataContractsDatasetsTaxRateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxRate" })
  totalTaxRate?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsValidDatatypeLinks })
  @Expose({ name: "validDatatypeLinks" })
  @Type(() => CodatDataContractsDatasetsValidDatatypeLinks)
  validDatatypeLinks?: CodatDataContractsDatasetsValidDatatypeLinks[];
}