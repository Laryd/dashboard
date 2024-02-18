import { NextRequest } from "next/server";

export default async function middleware(req: NextRequest){
    if(req.nextUrl.pathname = '/'){
        //track analytics events
        console.log("track")
    }
}



export const matcher = {
    matcher: ['/']
}