'use client'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import styles from './ui/LoadingSpinner.module.css'
import Link from "next/link";
import Button from './ui/uis/button';

const NotFound = () => {
  return (
    <div className={styles.error}>
        <h1>404</h1> 
        <p>'Error'</p>
        <p>We could not find what you are looking for </p> 
        <Link href="/">
          <Button props="Return Home" />
        </Link>
    </div>
  )
}

export default NotFound