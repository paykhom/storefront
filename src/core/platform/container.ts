export class Container {
    private dependencies: { [key: string]: any } = {};
    
    register(name: string, dependency: any): void {
            this.dependencies[name] = dependency;
         }
    
         resolve<T>(name: string): T {
            if (!this.dependencies[name]) {
             throw new Error(`Dependency ${name} not found in the container.`);
            }
           return this.dependencies[name];
         }
    }