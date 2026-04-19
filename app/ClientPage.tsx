'use client'

import AuthPage from '@/components/ui/landing/auth/AuthPage'
import Image from 'next/image'
import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from "next/navigation";


const ClientPage = () => {
  const [mode, setMode] = useState<"login" | "register">("login")
  const router = useRouter();
  const { login, register, loading } = useAuth()
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = async () => {
  let res;

  if (mode === "login") {
    res = await login(form.email, form.password);
  } else {
    res = await register(form.name, form.email, form.password);
  }

  if (res) {
    router.push("/dashboard");
  }
};


  return (
      <>
          {/* INPUTS */}
      <div className='w-full h-full grid place-items-center'>

        <AuthPage
          mode={mode}
          setMode={setMode}
          handleSubmit={handleSubmit}
          form={form}
          setForm={setForm}
          loading={loading}
        />

            
      </div>
      {/* IMAGE */}
      <div className='bg-orange-100 w-full h-full hidden lg:grid place-items-center'>
        <Image
          src={'/assets/landing.svg'}
          alt='Landing page picture'
          width={800}
          height={800}
        />
      </div>
    </>
  )
}

export default ClientPage