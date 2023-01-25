import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsAllocation } from "./codatdatacontractsdatasetsallocation";
import { CodatDataContractsDatasetsPaymentAllocationPayment } from "./codatdatacontractsdatasetspaymentallocationpayment";



export class CodatDataContractsDatasetsDetailedPaymentAllocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocation" })
  allocation: CodatDataContractsDatasetsAllocation;

  @SpeakeasyMetadata({ data: "json, name=payment" })
  payment: CodatDataContractsDatasetsPaymentAllocationPayment;
}
