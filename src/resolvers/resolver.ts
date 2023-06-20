// import { IsNull } from "typeorm";
import { InputUser, UpdateUser } from "../Type/CreateUserInput";
import { User } from "../entities/user";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class Hello {
  @Query(() => String)
  async helloworld() {
    return "Hello";
  }

  @Mutation(() => User)
  async createUser(@Arg("inputUser") inputUser: InputUser) {
    let newUser = new User();
    newUser.city = inputUser.city;
    newUser.dept = inputUser.dept;
    newUser.name = inputUser.name;

    let savedUser = await newUser.save();
    return savedUser;
  }

  @Query(() => User)
  async getUser(@Arg("id") id: string) {
    let user = await User.findOne({
      where: { id: id },
    });
    return user;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("id") id: string) {
    let user = await User.findOne({
      where: { id: id },
    });
    if (!user) {
      throw new Error("User not found!");
    }

    await user.remove();
    return true;
  }

  @Mutation(() => User)
  async updateUser(
    @Arg("id") id: String,
    @Arg("inputUser") inputUser: UpdateUser
  ) {
    let user = await User.findOne({
      where: { id: id },
    });
    if (!user) {
      throw new Error("User not found!");
    }
    if (inputUser.city != null) {
      user.city = inputUser.city;
    }
    if (inputUser.dept != null) {
      user.dept = inputUser.dept;
    }
    if (inputUser.name != null) {
      user.name = inputUser.name;
    }

    await user.save();
    return user;
  }
}
