export const handler = async (event: { name: string }) => {
    const result: string = event.name ? `Great Job ${event.name}!` : `Great Job`
    return result
}