import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class CodatDataIntegrityContractsMetadataMatchDateInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "maxDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  maxDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "maxOverlappingDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  maxOverlappingDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "minDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  minDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "minOverlappingDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  minOverlappingDate?: Date;
}