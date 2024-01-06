"use client" 
import { useFormStatus } from "react-dom";
import styles from "./button.module.css";
import { redirect } from "next/navigation";

export default function RegisterButton(props) {
  const { pending, success } = useFormStatus();
  if (success)
  redirect("/dashboard/users");

  return (
    <button className={styles.button} type="submit" aria-disabled={pending}>
      {pending ? "Loading..." : "Submit"} 

    </button>
  );
}
