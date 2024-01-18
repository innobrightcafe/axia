'use client'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import styles from './ui/LoadingSpinner.module.css'
import Link from "next/link";

const NotFound = () => {
  return (
    <div className={styles.error}>
        <h1>404</h1> 
        <p>Error
        We could not find what you are looking for </p>
        <Link href="/" >
        <h3>Return Home</h3><FaArrowRight size={50} />
        </Link>
    </div>
  )
}

export default NotFound