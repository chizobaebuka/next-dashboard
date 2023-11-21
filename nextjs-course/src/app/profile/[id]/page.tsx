"use client";
import { useParams} from 'next/navigation';

export default function ProfileID() {
    const params = useParams();
    return <div>Profile page id: {params.id} </div>
}