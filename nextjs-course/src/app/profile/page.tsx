"use client";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Profile() {
    const router = useRouter();

    // console.log(router)
    return (
        <div>
            <h1>my list of profiles</h1>
            <div>
                    <Link href='profil/1' >Profile 1</Link>
                    <Link href='profil/2' >Profile 1</Link>
                    <Link href={{
                        pathname: "/profile/3",
                        query: {
                            username: "profile 3 description",
                            age: 25,
                            
                        }
                    }}>
                            <div>Profile 3 description</div>
                    </Link>
                    <a href="https://www.google.com/">Google website </a>
            </div>
        </div>
    )
}