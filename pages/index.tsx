/** @namespace index */

/**
 * @file Home/index page
 * @author Logan Prunty
 * @see {@link index}
 */

// Dependencies
import { SetStateAction, useState } from "react"
import axios from "axios"
import { options } from "../util/axios"
import Head from "next/head"

// Stylesheets
// import styles from "../styles/Home.module.css"

// Types
import type { NextPage } from "next"

// Interfaces
interface result { result: number }

/**
 * Home/index Page
 * @memberof index
 * @see https://nextjs.org/docs/basic-features/pages
 * @see https://nextjs.org/docs/basic-features/typescript#pages
 * @requires react.useState
 * @requires axios
 * @requires next/head
 * @requires next.NextPage
 * @type {NextPage}
 * @returns {JSX.Element} Next.js Page
 */
const Index: NextPage = (): JSX.Element => {

  /**
   * @memberof index
   * @typedef {number} query Query that is sent to the MathAPI
   */

  /**
   * @memberof index
   * @typedef {Dispatch<SetStateAction<string>>} setQuery Sets query string
   */

  const [ query, setQuery ] = useState< string >( "" )

  /**
   * @memberof index
   * @typedef {number|null} answer Answer that is returned from the MathAPI
   */

  /**
   * @memberof index
   * @typedef {Dispatch<SetStateAction<number|null>>} setAnswer Sets the answer number
   */

  const [ answer, setAnswer ] = useState< number | null >( null )

  /**
   * Submits the given query string to the Math API
   */
  const handleSubmit = (): void => {

    axios.request< result >( options( query ) )
      .then( res => setAnswer( res.data.result ) )
      .catch( err => console.log( err ) )

  }

  return <div className = "bg-black text-white w-screen h-screen flex justify-center items-center flex-col gap-4">

    <Head>

      <title>Math</title>
      <meta name = "description" content = "Front end for Math API" />
      <link rel = "icon" href = "/favicon.ico" />

    </Head>

      <span>

        <label htmlFor = "equation">Equation:&nbsp;</label>
        <input name = "equation" type = "text" onChange = { e => setQuery( e.target.value ) } className = "p-1 text-black" />

      </span>

      <button onClick = { handleSubmit } className = "border border-white p-1">Submit</button>

      { answer ? <p>Answer: { answer }</p> : null }

  </div>

}

export default Index