/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IdeologyClusterCreateInput } from "./IdeologyClusterCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateIdeologyClusterArgs {
  @ApiProperty({
    required: true,
    type: () => IdeologyClusterCreateInput,
  })
  @ValidateNested()
  @Type(() => IdeologyClusterCreateInput)
  @Field(() => IdeologyClusterCreateInput, { nullable: false })
  data!: IdeologyClusterCreateInput;
}

export { CreateIdeologyClusterArgs as CreateIdeologyClusterArgs };