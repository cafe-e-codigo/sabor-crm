export interface Handler<Tcommand, TResult> {
  handle(command: Tcommand): Promise<TResult>;
}
