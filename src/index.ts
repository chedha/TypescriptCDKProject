export const handler = async (event: { name: string }) => {
    const result: string = event.name ? `Excellent Job! ${event.name}!` : `Great Job`
    return result
}