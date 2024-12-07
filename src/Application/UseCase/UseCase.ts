export default interface UseCase<UInput, UOutput>{
	execute(input: UInput): Promise<UOutput>;
}