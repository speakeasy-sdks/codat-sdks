import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsSupplierPagedResponseHrefModel } from "./codatdatacontractsdatasetssupplierpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsSupplierPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsSupplierPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsSupplierPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsSupplierPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsSupplierPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsSupplierPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsSupplierPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsSupplierPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsSupplierPagedResponseHrefModel;
}