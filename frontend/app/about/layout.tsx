

export default function dashboardLayout({
    children,
}:{
    children: React.ReactNode;
}){
    return(<>
        <h1>About Us</h1>
        {children}
        </>
    );
}


