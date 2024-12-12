export default function({children}:{
    children: React.ReactNode
}){
    return(
        <div>
            <div className="relative top-0 left-0 flex justify-end items-center">
                <a>GET 10% OFF ON SINGIN <span className="text-blue-900 italic font-bold">NOW!!</span></a>
            </div>
            {children}
        </div>
    );
}