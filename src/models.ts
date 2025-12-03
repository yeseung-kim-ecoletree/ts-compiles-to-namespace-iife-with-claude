namespace MyApp {
  export namespace Models {
    export class User {
      constructor(
        public name: string,
        public email: string
      ) {}

      getDisplayName(): string {
        return Utils.capitalize(Utils.format(this.name));
      }
    }
  }
}