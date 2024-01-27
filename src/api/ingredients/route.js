export const GET = async(req) => {
    try {
        await connectDB();
        const ingredients = await 
    } catch (error) {
        return new Response("Failed to created a new prompt", { status: 500 }); 
    }
    
}