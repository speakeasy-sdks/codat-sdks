import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsInvoicePagedResponseHrefModel } from "./codatdatacontractsdatasetsinvoicepagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsInvoicePagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsInvoicePagedResponseHrefModel)
  current?: CodatDataContractsDatasetsInvoicePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsInvoicePagedResponseHrefModel)
  next?: CodatDataContractsDatasetsInvoicePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsInvoicePagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsInvoicePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsInvoicePagedResponseHrefModel)
  self?: CodatDataContractsDatasetsInvoicePagedResponseHrefModel;
}