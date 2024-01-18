'use client';
import { useRouter } from "next/navigation";

export const Redirects = (props ) => {
    const router = useRouter();
    router.push(props.url);
    return null;
}