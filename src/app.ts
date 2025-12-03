namespace MyApp {
  export class Application {
    private users: Models.User[] = [];

    addUser(name: string, email: string): void {
      const user = new Models.User(name, email);
      this.users.push(user);
    }

    listUsers(): string[] {
      return this.users.map(u => u.getDisplayName());
    }
  }

  // 초기화
  export function init(): Application {
    console.log('MyApp initialized');
    return new Application();
  }
}