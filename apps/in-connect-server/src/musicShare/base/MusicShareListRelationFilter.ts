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
import { MusicShareWhereInput } from "./MusicShareWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MusicShareListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MusicShareWhereInput,
  })
  @ValidateNested()
  @Type(() => MusicShareWhereInput)
  @IsOptional()
  @Field(() => MusicShareWhereInput, {
    nullable: true,
  })
  every?: MusicShareWhereInput;

  @ApiProperty({
    required: false,
    type: () => MusicShareWhereInput,
  })
  @ValidateNested()
  @Type(() => MusicShareWhereInput)
  @IsOptional()
  @Field(() => MusicShareWhereInput, {
    nullable: true,
  })
  some?: MusicShareWhereInput;

  @ApiProperty({
    required: false,
    type: () => MusicShareWhereInput,
  })
  @ValidateNested()
  @Type(() => MusicShareWhereInput)
  @IsOptional()
  @Field(() => MusicShareWhereInput, {
    nullable: true,
  })
  none?: MusicShareWhereInput;
}
export { MusicShareListRelationFilter as MusicShareListRelationFilter };