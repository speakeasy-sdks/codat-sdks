import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAllocation } from "./codatdatacontractsdatasetsallocation";
import { CodatDataContractsDatasetsPaymentAllocationPayment } from "./codatdatacontractsdatasetspaymentallocationpayment";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsDetailedPaymentAllocation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocation" })
  @Type(() => CodatDataContractsDatasetsAllocation)
  allocation: CodatDataContractsDatasetsAllocation;

  @SpeakeasyMetadata()
  @Expose({ name: "payment" })
  @Type(() => CodatDataContractsDatasetsPaymentAllocationPayment)
  payment: CodatDataContractsDatasetsPaymentAllocationPayment;
}