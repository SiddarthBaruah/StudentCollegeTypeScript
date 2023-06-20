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

export { InputUser };
