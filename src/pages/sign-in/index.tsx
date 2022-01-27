import React, { useState } from 'react'
import { supabase } from '../../utils/supabaseClient'
import Link from 'next/link'
import Layout from '@/components/SiteLayout/Layout'


export default function SignIn() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (email: string) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Layout fullTitle='Dono | Sign-in' withHeader withFooter animate>
      <div className="container" style={{'display': 'flex', "justify-content": "center", "align-items": "center"}}><div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
            id="email" type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email" />
        </div>
        <div className="mb-6">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button 
            disabled={loading}
              onClick={(e) => {
                e.preventDefault()
                handleLogin(email)
              }}
            className="bg-blue hover:bg-blue-dark text-dark font-bold py-2 px-4 rounded" type="button">
              <span>{loading ? 'Loading' : 'Send magic link'}</span>
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
              Forgot Password?
            </a>
          </div>
        </div></div>
      </Layout>
  );
}