import Link from "next/link";

export default function Header(){
    return(
        <div className="header">
            <Link href={'/'}>Home</Link>
            <Link href={'/loign'}>Login</Link>
            <Link href={'/register'}>Register</Link>
            <Link href={'/dashboard'}>Dashboard</Link>
        </div>
    )
} 