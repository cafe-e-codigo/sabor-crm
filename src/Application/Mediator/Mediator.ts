import {Handler} from "./Handler";

export class Mediator {
	private handlers: Map<string, Handler<any, any>> = new Map();

	register<TCommand, TResult>(commandName: string, handler: Handler<TCommand, TResult>): void {
		this.handlers.set(commandName, handler);
	}

	async send<TCommand, TResult>(command: TCommand): Promise<TResult>{
		const handler = this.handlers.get((command as any).constructor.name) as Handler<TCommand, TResult>;
		if(!handler) throw new Error(`No handler registered for command: ${(command as any).constructor.name}`);
		return await handler.handle(command);
	}
}