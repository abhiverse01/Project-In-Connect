/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InterestClusterWhereInput } from "./InterestClusterWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class InterestClusterListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => InterestClusterWhereInput,
  })
  @ValidateNested()
  @Type(() => InterestClusterWhereInput)
  @IsOptional()
  @Field(() => InterestClusterWhereInput, {
    nullable: true,
  })
  every?: InterestClusterWhereInput;

  @ApiProperty({
    required: false,
    type: () => InterestClusterWhereInput,
  })
  @ValidateNested()
  @Type(() => InterestClusterWhereInput)
  @IsOptional()
  @Field(() => InterestClusterWhereInput, {
    nullable: true,
  })
  some?: InterestClusterWhereInput;

  @ApiProperty({
    required: false,
    type: () => InterestClusterWhereInput,
  })
  @ValidateNested()
  @Type(() => InterestClusterWhereInput)
  @IsOptional()
  @Field(() => InterestClusterWhereInput, {
    nullable: true,
  })
  none?: InterestClusterWhereInput;
}
export { InterestClusterListRelationFilter as InterestClusterListRelationFilter };