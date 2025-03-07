class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        this.data = null;
    }

    setData(data) {
        this.data = data;
    }

    getData() {
        return this.data;
    }
}




/**
 * Factory Method Pattern
 * Defines an interface for creating objects, but lets subclasses decide which class to instantiate.
 */

/**
 * Factory Method Pattern
 * Defines an interface for creating objects, but lets subclasses decide which class to instantiate.
 */
class Factory {
    createObject(){
      throw new Error("Method 'createObject' must be implemented.")
    }
  }
  
 class Product {
  constructor(){
        throw new Error("Method must be implemented.")
    }
  }

  class ConcreteProduct extends Product {
    constructor(data){
        super();
        this.data = data;
    }
 }

 class ConcreteFactory extends Factory {
    createObject(data) {
        return new ConcreteProduct(data);
      }
 }

//export { Factory, Product, ConcreteFactory };

/**
 * Adapter Pattern
 * Allows classes with incompatible interfaces to work together.
 */
class Adaptee {
    specificRequest() {
      throw new Error("Method 'specificRequest' must be implemented.");
    }
  }
  
  class Target {
    request() {
        throw new Error("Method 'request' must be implemented.");
    }
  }
  
  class Adapter extends Target {
    constructor(adaptee) {
      super();
      this.adaptee = adaptee;
    }
    
    request() {
      return this.adaptee.specificRequest();
    }
  }

export {Adaptee, Adapter, Target};

/**
 * Decorator Pattern
 * Dynamically adds responsibilities to an object.
 */
class Component {
    operation() {
        throw new Error("Method 'operation' must be implemented.");
    }
}

class ConcreteComponent extends Component {
    operation() {
      return "Component";
    }
  }
  
  class Decorator extends Component {
    constructor(component) {
      super();
      this.component = component;
    }
    
    operation() {
      return this.component.operation();
    }
  }
  
  class ConcreteDecorator extends Decorator {
    operation() {
      return `Decorator(${super.operation()})`;
    }
  }

//export {Component, ConcreteComponent, Decorator, ConcreteDecorator};

/**
 * Observer Pattern
 * Allows objects to subscribe to events and receive notifications.
 */

class Subject {
    constructor() {
      this.observers = [];
    }
  
    subscribe(observer) {
      this.observers.push(observer);
    }
  
    unsubscribe(observer) {
      this.observers = this.observers.filter((obs) => obs !== observer);
    }
  
    notify(data) {
      this.observers.forEach((observer) => observer.update(data));
    }
  }
  
  class Observer {
    update(data) {
        throw new Error("Method 'update' must be implemented.");
    }
  }
  
//export {Subject, Observer};


/**
 * Strategy Pattern
 * Defines a family of algorithms and makes them interchangeable.
 */

class Strategy {
    execute() {
      throw new Error("Method 'execute' must be implemented.");
    }
  }
  
  class ConcreteStrategy extends Strategy {
    execute(data) {
      return `Strategy executed with: ${data}`;
    }
  }
  
  class Context {
    constructor(strategy) {
      this.strategy = strategy;
    }
    
    setStrategy(strategy){
      this.strategy = strategy;
    }
    
    executeStrategy(data) {
      return this.strategy.execute(data);
    }
  }

  //export {Context, Strategy, ConcreteStrategy};


/**
 * Builder Pattern
 * Separates the construction of a complex object from its representation,
 * allowing for the creation of different variations of the object using the same construction process.
 */

// Abstract Builder Interface
class Builder {
    reset() {
      throw new Error("Method 'reset' must be implemented.");
    }
    setPartA() {
      throw new Error("Method 'setPartA' must be implemented.");
    }
    setPartB() {
      throw new Error("Method 'setPartB' must be implemented.");
    }
    setPartC() {
        throw new Error("Method 'setPartC' must be implemented.");
    }
    getResult() {
      throw new Error("Method 'getResult' must be implemented.");
    }
  }
  
  
  // Concrete Builder
  class ConcreteBuilder extends Builder {
      constructor(){
          super();
          this.product = {};
      }
    reset() {
      this.product = {};
    }
    setPartA() {
      this.product.partA = "Part A";
    }
    setPartB() {
      this.product.partB = "Part B";
    }
    setPartC() {
      this.product.partC = "Part C";
  }
    getResult() {
      return this.product;
    }
  }
  
  // Director (optional, can be useful to build specific configurations)
  class Director {
    constructor(builder) {
      this.builder = builder;
    }
  
    buildMinimalProduct() {
      this.builder.reset();
      this.builder.setPartA();
      this.builder.setPartB();
    }
  
    buildFullProduct() {
      this.builder.reset();
      this.builder.setPartA();
      this.builder.setPartB();
      this.builder.setPartC();
    }
  }
  
  
  //export { Builder, ConcreteBuilder, Director };



/**
 * Prototype Pattern
 * Creates new objects by copying an existing object (the prototype).
 */

// Abstract Prototype Interface
class Prototype {
    clone() {
        throw new Error("Method 'clone' must be implemented.");
    }
}

// Concrete Prototype
class ConcretePrototype extends Prototype {
  constructor(data) {
    super();
    this.data = data;
  }
  clone() {
      return new ConcretePrototype(this.data);
  }
    getData(){
        return this.data;
    }
}

//export { Prototype, ConcretePrototype };



/**
 * Bridge Pattern
 * Decouples an abstraction from its implementation, allowing them to vary independently.
 */

// Abstraction Interface
class Abstraction {
    constructor(implementation) {
      this.implementation = implementation;
    }
  
    operation() {
      throw new Error("Method 'operation' must be implemented.");
    }
  }
  
  // Refined Abstraction
  class RefinedAbstraction extends Abstraction {
      constructor(implementation) {
        super(implementation);
      }
    
      operation() {
        return `Refined Abstraction using: ${this.implementation.operation()}`;
      }
    }
  
  
  // Implementor Interface
  class Implementor {
    operation() {
      throw new Error("Method 'operation' must be implemented.");
    }
  }
  
  // Concrete Implementors
  class ConcreteImplementor extends Implementor {
      operation() {
          return "Implementation A";
        }
  }
  
  //export { Abstraction, RefinedAbstraction, Implementor, ConcreteImplementorA, ConcreteImplementorB };

  
/**
 * Composite Pattern
 * Allows you to treat individual objects and compositions of objects uniformly.
 */

// Component Interface
class Component {
    constructor(name) {
      this.name = name;
    }
    operation() {
      throw new Error("Method 'operation' must be implemented.");
    }
      getName() {
          return this.name;
      }
  }
  
  
  // Leaf
  class Leaf extends Component {
    constructor(name) {
      super(name);
    }
    operation() {
      return `Leaf ${this.name}`;
    }
  }
  
  // Composite
  class Composite extends Component {
    constructor(name) {
        super(name);
      this.children = [];
    }
    add(component) {
      this.children.push(component);
    }
    remove(component) {
      this.children = this.children.filter(child => child !== component);
    }
    operation() {
      let results = [];
      for (const child of this.children) {
        results.push(child.operation());
      }
      return `Composite ${this.name} (${results.join(', ')})`;
    }
  }
  
  //export { Component, Leaf, Composite };


  /**
 * Facade Pattern
 * Provides a simplified interface to a complex subsystem.
 */

// naive...

// Subsystem classes
class SubsystemA {
    operationA() {
      return "Subsystem A operation";
    }
  }
  
  class SubsystemB {
    operationB() {
      return "Subsystem B operation";
    }
  }
  
  class SubsystemC {
    operationC() {
      return "Subsystem C operation";
    }
  }
  
  
  // Facade class
  class Facade {
      constructor() {
          this.subsystemA = new SubsystemA();
          this.subsystemB = new SubsystemB();
          this.subsystemC = new SubsystemC();
      }
    operation() {
      let result = [];
      result.push(this.subsystemA.operationA());
      result.push(this.subsystemB.operationB());
      result.push(this.subsystemC.operationC());
      return `Facade Operation: ${result.join(', ')}`;
    }
  }
// /naive...
  
  //export { Facade };

/**
 * Flyweight Pattern
 * Reduces memory usage by sharing objects, especially those that are immutable.
 */

// Flyweight Interface
class Flyweight {
    constructor(intrinsicState) {
      this.intrinsicState = intrinsicState;
    }
    operation(extrinsicState) {
      throw new Error("Method 'operation' must be implemented.");
    }
  }
  
  // Concrete Flyweight
  class ConcreteFlyweight extends Flyweight {
      constructor(intrinsicState){
          super(intrinsicState);
      }
    operation(extrinsicState) {
      return `Flyweight with Intrinsic: ${this.intrinsicState}, Extrinsic: ${extrinsicState}`;
    }
  }
  
  // Flyweight Factory
  class FlyweightFactory {
    constructor() {
      this.flyweights = {};
    }
    getFlyweight(intrinsicState) {
      if (!this.flyweights[intrinsicState]) {
        this.flyweights[intrinsicState] = new ConcreteFlyweight(intrinsicState);
      }
      return this.flyweights[intrinsicState];
    }
  }
  
//  export { FlyweightFactory };

/**
 * Proxy Pattern
 * Provides a surrogate or placeholder for another object to control access to it.
 */

// Subject Interface
/* Ambiguous pattern class name
class Subject {
    request() {
        throw new Error("Method 'request' must be implemented.");
    }
}
*/

// Real Subject
class RealSubject extends Subject {
    request() {
        return "Real Subject Request";
    }
}

// Proxy
class Proxy extends Subject {
    constructor(realSubject) {
        super();
        this.realSubject = realSubject;
    }

    request() {
        return `Proxy Request (${this.realSubject.request()})`;
    }
}

//export {Subject, RealSubject, Proxy};


/**
 * Chain of Responsibility Pattern
 * Passes requests along a chain of handlers, allowing each handler to decide whether
 * to process the request or pass it on.
 */

// Handler Interface
class Handler {
    constructor() {
        this.nextHandler = null;
    }

    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

// Concrete Handlers
class ConcreteHandler extends Handler {
    handle(request) {
        if (request === "A") {
            return "Handler A handles the request";
        }
        return super.handle(request);
    }
}

/*
class ConcreteHandlerB extends Handler {
    handle(request) {
        if (request === "B") {
            return "Handler B handles the request";
        }
        return super.handle(request);
    }
}

class ConcreteHandlerC extends Handler {
    handle(request) {
        if (request === "C") {
            return "Handler C handles the request";
        }
         return super.handle(request);
    }
}
*/
//export { Handler, ConcreteHandlerA, ConcreteHandlerB, ConcreteHandlerC };


/**
 * Command Pattern
 * Encapsulates a request as an object, allowing for parameterization of clients with different
 * requests, queuing requests, and supporting undoable operations.
 */

// Command Interface
class Command {
    execute() {
      throw new Error("Method 'execute' must be implemented.");
    }
  }
  
  // Concrete Command
  class ConcreteCommand extends Command {
      constructor(receiver, data){
          super();
        this.receiver = receiver;
        this.data = data;
      }
    execute() {
      return this.receiver.action(this.data);
    }
  }
  
  // Receiver
  class Receiver {
      action(data) {
      return `Receiver Action with data: ${data}`;
    }
  }
  
  // Invoker
  class Invoker {
      constructor(){
          this.commands = [];
      }
    execute(command) {
        this.commands.push(command);
      return command.execute();
    }
      getAllExecuted(){
          return this.commands;
      }
  }
  
  
  //export { Command, ConcreteCommand, Receiver, Invoker };

/**
 * Interpreter Pattern
 * Defines a grammatical representation for a language and provides an interpreter to
 * use this grammar to interpret statements in the language.
 */

// Abstract Expression Interface
class Expression {
    interpret() {
        throw new Error("Method 'interpret' must be implemented.");
    }
}

// Terminal Expression
class TerminalExpression extends Expression {
    constructor(data) {
        super();
        this.data = data;
    }
    interpret() {
        return this.data;
    }
}

// Non-terminal Expression
class NonTerminalExpression extends Expression {
    constructor(expression1, expression2, operation){
        super();
        this.expression1 = expression1;
        this.expression2 = expression2;
        this.operation = operation;
    }

    interpret() {
        if (this.operation === "add") {
          return this.expression1.interpret() + this.expression2.interpret();
        }
        if (this.operation === "sub") {
          return this.expression1.interpret() - this.expression2.interpret();
        }
      return 0;
    }
}

// Context
class Context {
  constructor(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

//export { Expression, TerminalExpression, NonTerminalExpression, Context };


/**
 * Iterator Pattern
 * Provides a way to access the elements of an aggregate object sequentially without
 * exposing its underlying representation.
 */

// Iterator Interface
class Iterator {
    next() {
        throw new Error("Method 'next' must be implemented.");
    }
    hasNext() {
        throw new Error("Method 'hasNext' must be implemented.");
    }
}

// Concrete Iterator
class ConcreteIterator extends Iterator {
    constructor(collection) {
        super();
        this.collection = collection;
        this.index = 0;
    }

    next() {
        if (this.hasNext()) {
            return this.collection[this.index++];
        }
      return null;
    }

    hasNext() {
        return this.index < this.collection.length;
    }
}

// Aggregate Interface
class Aggregate {
    getIterator() {
        throw new Error("Method 'getIterator' must be implemented.");
    }
}

// Concrete Aggregate
class ConcreteAggregate extends Aggregate {
    constructor(collection){
      super();
        this.collection = collection;
    }
    getIterator() {
        return new ConcreteIterator(this.collection);
    }
}

//export { Iterator, ConcreteIterator, Aggregate, ConcreteAggregate };

/**
 * Mediator Pattern
 * Centralizes the communication between a set of objects, reducing direct dependencies.
 */

// Mediator Interface
class Mediator {
    notify(sender, event) {
      throw new Error("Method 'notify' must be implemented.");
    }
  }
  
  // Concrete Mediator
  class ConcreteMediator extends Mediator {
      constructor(){
          super();
          this.components = [];
      }
      add(component){
          this.components.push(component);
          component.setMediator(this);
      }
      notify(sender, event) {
          for (const component of this.components){
              if(component != sender){
                  component.receive(event);
              }
          }
      }
  }
  
  // Base Component
  /* Ambiguous or example class names
  class Component {
    constructor() {
      this.mediator = null;
    }
    setMediator(mediator) {
      this.mediator = mediator;
    }
    send(event) {
        this.mediator.notify(this, event);
    }
    receive(event) {
      throw new Error("Method 'receive' must be implemented.");
    }
  }
  
  // Concrete Components
  class ConcreteComponentA extends Component {
      receive(event) {
          return `Component A received: ${event}`
      }
  }
  
  class ConcreteComponentB extends Component {
      receive(event) {
        return `Component B received: ${event}`
      }
  }
  */

//  export { Mediator, ConcreteMediator, Component, ConcreteComponentA, ConcreteComponentB };

/**
 * Memento Pattern
 * Captures and externalizes an object's internal state so that the object can be restored
 * to this state later, without violating encapsulation.
 */

// Memento Class
class Memento {
    constructor(state){
        this.state = state;
    }
    getState(){
      return this.state;
    }
}

// Originator Class
class Originator {
    constructor(state){
      this.state = state;
    }

  setState(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  saveToMemento() {
    return new Memento(this.state);
  }

  restoreFromMemento(memento) {
    this.state = memento.getState();
  }
}

// Caretaker Class
class Caretaker {
    constructor() {
        this.mementos = [];
    }

  addMemento(memento) {
    this.mementos.push(memento);
  }

  getMemento(index) {
    return this.mementos[index];
  }
}

//export { Memento, Originator, Caretaker };

/**
 * State Pattern
 * Allows an object to alter its behavior when its internal state changes.
 */

// State Interface
class State {
    handle() {
        throw new Error("Method 'handle' must be implemented.");
    }
}

// Concrete States
class ConcreteState extends State {
    handle() {
        return "State A";
    }
}

/* ambi or example
class ConcreteStateB extends State {
    handle() {
        return "State B";
    }
}
*/

// Context
// class Context is already 3rd time created!
class Context {
    constructor(state) {
        this.state = state;
    }

    setState(state) {
        this.state = state;
    }

    request() {
        return this.state.handle();
    }
}

//export { State, ConcreteStateA, ConcreteStateB, Context };


/**
 * Visitor Pattern
 * Allows you to add new operations to a structure of objects without changing the classes
 * of those objects.
 */

// Visitor Interface
class Visitor {
    visitConcreteElementA(element) {
      throw new Error("Method 'visitConcreteElementA' must be implemented.");
    }
    visitConcreteElementB(element) {
        throw new Error("Method 'visitConcreteElementB' must be implemented.");
    }
}

// Concrete Visitors
class ConcreteVisitor1 extends Visitor {
    visitConcreteElementA(element) {
        return `Visitor 1 visiting Element A: ${element.operation()}`;
    }
    visitConcreteElementB(element) {
        return `Visitor 1 visiting Element B: ${element.operation()}`;
    }
}

class ConcreteVisitor2 extends Visitor {
    visitConcreteElementA(element) {
        return `Visitor 2 visiting Element A: ${element.operation()}`;
    }
    visitConcreteElementB(element) {
        return `Visitor 2 visiting Element B: ${element.operation()}`;
    }
}


// Element Interface
class Element {
  accept(visitor) {
    throw new Error("Method 'accept' must be implemented.");
  }
    operation() {
        throw new Error("Method 'operation' must be implemented.");
    }
}

// Concrete Elements
class ConcreteElementA extends Element {
    accept(visitor) {
        return visitor.visitConcreteElementA(this);
    }
    operation() {
        return "Element A";
    }
}

class ConcreteElementB extends Element {
    accept(visitor) {
        return visitor.visitConcreteElementB(this);
    }
    operation() {
        return "Element B";
    }
}


//export { Visitor, ConcreteVisitor1, ConcreteVisitor2, Element, ConcreteElementA, ConcreteElementB };

/**
 * Provider Pattern / Dependency Injection
 * Decouples the use of services from their concrete implementations.
 */

// Provider Interface
class Provider {
    provide(key) {
      throw new Error("Method 'provide' must be implemented.");
    }
  }
  
  // Basic Implementation (Service container)
  class BasicProvider extends Provider {
      constructor() {
          super();
          this.services = {};
      }
      register(key, service) {
          this.services[key] = service;
      }
  
      provide(key) {
          if(!this.services[key]){
            throw new Error(`Service ${key} not registered`);
          }
        return this.services[key];
      }
  }
  
  //export { Provider, BasicProvider };


/**
 * Event-Driven Architecture (EDA) with Pub/Sub
 * Enables components to communicate through events, promoting decoupling and asynchrony.
 */

// Event Emitter Interface
class EventEmitter {
    publish(event, data) {
      throw new Error("Method 'publish' must be implemented.");
    }
    subscribe(event, callback) {
      throw new Error("Method 'subscribe' must be implemented.");
    }
    unsubscribe(event, callback) {
      throw new Error("Method 'unsubscribe' must be implemented.");
    }
  }
  
  // Basic Event Emitter Implementation
  class BasicEventEmitter extends EventEmitter {
    constructor() {
      super();
      this.events = {};
    }
  
    publish(event, data) {
        if (!this.events[event]) {
            return;
        }
      this.events[event].forEach((callback) => callback(data));
    }
  
    subscribe(event, callback) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(callback);
    }
  
    unsubscribe(event, callback) {
      if (this.events[event]) {
        this.events[event] = this.events[event].filter((cb) => cb !== callback);
      }
    }
  }
  
//  export { EventEmitter, BasicEventEmitter };

/**
 * CQRS (Command Query Responsibility Segregation) Pattern
 * Separates read operations (queries) from write operations (commands).
 */

// Command Interface
class Command {
    constructor(payload){
      this.payload = payload;
    }
  execute() {
    throw new Error("Method 'execute' must be implemented.");
  }
}

// Query Interface
class Query {
    constructor(payload){
      this.payload = payload;
    }
  execute() {
    throw new Error("Method 'execute' must be implemented.");
  }
}

// Command Handler Interface
class CommandHandler {
  handle(command) {
      throw new Error("Method 'handle' must be implemented.");
  }
}

// Query Handler Interface
class QueryHandler {
  handle(query) {
    throw new Error("Method 'handle' must be implemented.");
  }
}

// Basic Command Dispatcher
class CommandDispatcher {
    constructor() {
        this.handlers = {};
    }

    registerHandler(commandType, handler){
        this.handlers[commandType] = handler;
    }

    dispatch(command){
        const handler = this.handlers[command.constructor.name];
        if(!handler){
            throw new Error(`No handler found for command ${command.constructor.name}`);
        }
        return handler.handle(command);
    }
}

// Basic Query Dispatcher
class QueryDispatcher {
    constructor() {
      this.handlers = {};
    }

    registerHandler(queryType, handler){
        this.handlers[queryType] = handler;
    }

    dispatch(query){
      const handler = this.handlers[query.constructor.name];
      if(!handler){
          throw new Error(`No handler found for query ${query.constructor.name}`);
      }
      return handler.handle(query);
  }
}

//export { Command, Query, CommandHandler, QueryHandler, CommandDispatcher, QueryDispatcher };

/**
 * Asynchronous Operation patterns
 * Basic patterns to handle asynchronous code.
 */


// Basic function to simulate asynchronous work
function doAsyncWork(data, delay = 1000) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Async work completed with data: ${data}`);
      }, delay);
    });
  }

// Function that will receive a list of async operations and execute them sequentially.
async function sequentialAsyncOperations(operations){
  let results = [];
  for (const operation of operations) {
     const result = await operation();
    results.push(result);
  }
  return results;
}


// Function that will receive a list of async operations and execute them in parallel.
async function parallelAsyncOperations(operations){
    return Promise.all(operations.map(operation => operation()));
}

//export { doAsyncWork, sequentialAsyncOperations, parallelAsyncOperations };

/**
 * Application Container
 * A central component for managing the lifecycle of the application,
 * providing services and configurations.
 */

class ApplicationContainer {
    constructor(provider) {
      this.provider = provider;
      this.services = {};
    }

    registerService(key, service) {
      this.services[key] = service;
    }

    getService(key){
      return this.provider.provide(key);
    }

    async start() {
      console.log("Application started.");
      // Perform any necessary start-up tasks here
    }

   async stop() {
      console.log("Application stopped.");
      // Perform any necessary cleanup tasks here
    }
  }

//  export default ApplicationContainer;

/**
 * Error Handling
 * Defines an interface to manage errors throughout the application.
 */

class ErrorHandler {
    constructor(){
      this.errorHandlers = [];
    }

    registerHandler(handler){
        this.errorHandlers.push(handler);
    }

    handleError(error, context){
        for(const handler of this.errorHandlers){
          handler.handle(error, context)
        }
    }
 }


//export default ErrorHandler;

/**
 * Configuration Abstraction
 * Provides an abstraction to manage application configurations,
 * allowing you to set the behavior of the framework.
 */

// Configuration Interface
class Configuration {
    get(key) {
        throw new Error("Method 'get' must be implemented.");
    }
    set(key, value){
        throw new Error("Method 'set' must be implemented.");
    }
    load(){
        throw new Error("Method 'load' must be implemented.");
    }
}

// Basic Implementation (defaults)
class BasicConfiguration extends Configuration{
    constructor(config = {}){
        super();
      this.config = config;
    }

    get(key){
        return this.config[key];
    }
    set(key, value){
        this.config[key] = value;
    }
    load(newConfig){
      this.config = {...this.config, ...newConfig};
    }
}

//export {Configuration, BasicConfiguration};

/**
 * Domain-Driven Design (DDD) Concepts
 * Defines basic interfaces for modeling the domain in a better way.
 */

// Aggregate Interface
class Aggregate {
    constructor(id){
        this.id = id;
    }

}

// Value Object Interface
class ValueObject {
    equals(valueObject) {
        throw new Error("Method 'equals' must be implemented.");
    }
}

// Domain Event Interface
class DomainEvent {
    constructor () {
        //...
    }
    
  }


//export { Aggregate, ValueObject, DomainEvent };

/**
 * Orchestration Patterns
 * Enables you to orchestrate complex workflows,
 * chaining different operations together.
 */

// Workflow Interface
class Workflow {
    constructor() {
    }
    execute() {
        throw new Error("Method 'execute' must be implemented.");
    }
    setNext(workflow){
        throw new Error("Method 'setNext' must be implemented.");
    }
}

// Concrete Workflow implementation that will execute a command.
class CommandWorkflow extends Workflow{
    constructor(commandDispatcher, command){
        super();
      this.commandDispatcher = commandDispatcher;
      this.command = command;
        this.nextWorkflow = null;
    }
    execute(){
      this.commandDispatcher.dispatch(this.command);
        if(this.nextWorkflow){
            return this.nextWorkflow.execute();
        }
        return;
    }
    setNext(workflow){
      this.nextWorkflow = workflow;
        return workflow;
    }
}

// Concrete workflow implementation that will execute a function.
class FunctionWorkflow extends Workflow {
  constructor(fn) {
    super();
      this.fn = fn;
      this.nextWorkflow = null;
  }
    execute(){
      this.fn();
        if(this.nextWorkflow){
            return this.nextWorkflow.execute();
        }
        return;
    }
    setNext(workflow){
      this.nextWorkflow = workflow;
        return workflow;
    }
}

// Basic Workflow manager that will execute the workflows.
class WorkflowManager {
    constructor(){
        this.initialWorkflow = null;
    }
    setInitialWorkflow(workflow){
        this.initialWorkflow = workflow;
    }
    start(){
        if(this.initialWorkflow){
           this.initialWorkflow.execute();
        }
    }
}

//export { Workflow, CommandWorkflow, FunctionWorkflow, WorkflowManager };
