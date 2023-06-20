import { Field, InputType } from "type-graphql";

@InputType()
class InputUser {
  @Field()
  name: string;

  @Field()
  dept: string;

  @Field()
  city: string;
}

@InputType()
class UpdateUser {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  dept: string;

  @Field({ nullable: true })
  city: string;
}

export { InputUser, UpdateUser };
