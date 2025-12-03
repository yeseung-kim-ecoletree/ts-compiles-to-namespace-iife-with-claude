namespace MyApp {
  export namespace Utils {
    export function format(str: string): string {
      return str.trim().toLowerCase();
    }

    export function capitalize(str: string): string {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }
}